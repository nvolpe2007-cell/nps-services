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
  - Email: ninofarias@nandpservices.com
  - Phone: (832) 704-5525

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
- **Owner:** Margarito Garcia
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

## Recent Changes (Jan 2026)
- Converted from mockup to full-stack application
- Added backend API for contact form
- Prepared email integration (awaiting configuration)
- Fixed navigation accessibility issues
