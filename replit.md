# N&P Services - Construction Website

## Overview
Professional website for N&P Services, a leading construction firm in League City, Texas. The company specializes in residential and commercial construction, with over 17 years of experience and an A+ BBB rating. They are widely recognized as **Houston's parking lot and asphalt experts**.

## Project Status
**Current State:** Production-ready marketing website with functional contact form

## Key Features
- Modern, minimalist design with black/white aesthetic
- Full-screen hero section with high-quality imagery
- Comprehensive service pages (Residential, Commercial, Specialized)
- Portfolio showcase
- Blog section for industry insights
- Functional contact form with backend API

## Contact Form Integration
The contact form at `/contact` submits to `/api/contact` endpoint.

**Email Service Status:** ⚠️ Not configured
- The Resend email integration was dismissed during setup
- Contact form will gracefully handle missing email configuration by showing a fallback message
- Users are directed to contact the business directly via:
  - Email: Brandon@lancaster-ent.net
  - Phone: (832) 226-4018

**To Enable Email Notifications:**
If you'd like the contact form to send email notifications, you have two options:
1. Set up the Resend integration through Replit's integration system
2. Provide a Resend API key manually by setting the `RESEND_API_KEY` secret in your environment

## Architecture
- **Frontend:** React 19 + Wouter (routing) + TailwindCSS + Shadcn/UI
- **Backend:** Express.js with API routes at `/api/*`
- **Fonts:** Inter (modern, clean sans-serif)
- **Color Scheme:** Minimalist black/white with sharp contrasts

## Business Information
- **Company:** N&P Services
- **Founded:** 2008
- **Owner:** Nino Farias
- **Type:** Sole Proprietorship
- **Location:** 207 West Wilkins Street, League City, TX 77573
- **Service Area:** Greater Houston area and surrounding regions
- **BBB Rating:** A+ (not accredited)
- **Specialization:** Houston's parking lot and asphalt experts

## Service Categories
1. **Residential:** New builds, remodeling, kitchens, bathrooms, additions, fencing, decks, flooring
2. **Commercial:** General construction, site work, utilities, multi-family projects
3. **Specialized:** RV parks, detention ponds, land clearing, asphalt striping, concrete repair, seal coating

## Social & External Links
- Facebook: https://www.facebook.com/nandpservices/
- BBB Profile: https://www.bbb.org/us/tx/league-city/profile/construction-services/n-p-services-0915-90009898

## Design Reference
The website design was inspired by a modern construction firm aesthetic featuring:
- Full-viewport hero sections
- Clean typography with generous letter spacing
- High-quality aerial photography
- Minimalist navigation
- Strong CTAs

## SMS Notifications (Twilio Integration)
The website now supports SMS notifications via Twilio. When a contact form is submitted, an SMS alert is sent to the configured business phone number.

**SMS Features:**
- Automatic SMS notifications when contact form is submitted
- Works independently of email - SMS sends even if email is not configured
- Secure credential management via Replit's Twilio integration with 5-minute caching

**Configuration:**
- By default, SMS alerts are sent to the phone number configured in your Twilio integration
- Optionally set `NOTIFICATION_PHONE_NUMBER` environment variable to override the destination phone
- Twilio credentials are managed securely through Replit's integration system with 5-minute caching

**How It Works:**
- Contact form submissions attempt both SMS and email notifications
- Success requires at least one notification method to work
- If neither is configured, users see a fallback message with direct contact info

## Recent Changes (Jan 2026)
- Added SMS notifications via Twilio integration
- Converted from mockup to full-stack application
- Added backend API for contact form
- Prepared email integration (awaiting configuration)
- Fixed navigation accessibility issues
