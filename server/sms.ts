import twilio from 'twilio';

interface TwilioCredentials {
  accountSid: string;
  apiKey: string;
  apiKeySecret: string;
  phoneNumber: string | null;
}

let cachedCredentials: TwilioCredentials | null = null;
let credentialsCacheTime: number = 0;
const CREDENTIALS_CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function getCredentials(): Promise<TwilioCredentials> {
  // Return cached credentials if still valid
  if (cachedCredentials && Date.now() - credentialsCacheTime < CREDENTIALS_CACHE_TTL) {
    return cachedCredentials;
  }

  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  if (!hostname) {
    throw new Error('Replit connectors not available - REPLIT_CONNECTORS_HOSTNAME not set');
  }

  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('Replit identity token not available');
  }

  const response = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=twilio',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch Twilio credentials');
  }

  const data = await response.json();
  const connectionSettings = data.items?.[0];

  if (!connectionSettings?.settings?.account_sid || !connectionSettings?.settings?.api_key || !connectionSettings?.settings?.api_key_secret) {
    throw new Error('Twilio integration not properly configured');
  }

  cachedCredentials = {
    accountSid: connectionSettings.settings.account_sid,
    apiKey: connectionSettings.settings.api_key,
    apiKeySecret: connectionSettings.settings.api_key_secret,
    phoneNumber: connectionSettings.settings.phone_number || null
  };
  credentialsCacheTime = Date.now();

  return cachedCredentials;
}

async function getTwilioClient() {
  const { accountSid, apiKey, apiKeySecret } = await getCredentials();
  return twilio(apiKey, apiKeySecret, {
    accountSid: accountSid
  });
}

async function getTwilioFromPhoneNumber() {
  const { phoneNumber } = await getCredentials();
  return phoneNumber;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function sendContactNotificationSMS(
  toPhoneNumber: string,
  formData: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const client = await getTwilioClient();
    const fromNumber = await getTwilioFromPhoneNumber();

    if (!fromNumber) {
      return { success: false, error: 'Twilio phone number not configured' };
    }

    const messageBody = `New Lead from N&P Services Website!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage: ${formData.message.substring(0, 150)}${formData.message.length > 150 ? '...' : ''}`;

    console.log(`Sending SMS from ${fromNumber} to ${toPhoneNumber}`);
    const message = await client.messages.create({
      body: messageBody,
      from: fromNumber,
      to: toPhoneNumber
    });
    console.log(`SMS Message SID: ${message.sid}, Status: ${message.status}`);

    return { success: true };
  } catch (error) {
    console.error('SMS sending error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send SMS' 
    };
  }
}

export async function isTwilioConfigured(): Promise<boolean> {
  try {
    await getCredentials();
    return true;
  } catch {
    return false;
  }
}

export async function getTwilioPhoneNumber(): Promise<string | null> {
  try {
    const credentials = await getCredentials();
    return credentials.phoneNumber;
  } catch {
    return null;
  }
}
