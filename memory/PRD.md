# Punya Academy - School Website
**Product Requirements Document**

## Overview
A complete multi-page modern school website for Punya Academy, an educational institute in Bangalore. The website showcases the school's programs, facilities, and values while providing an easy admission process for parents.

---

## Original Problem Statement
Create a complete multi-page modern school website for Punya Academy in Bangalore with 12 pages:
- Home, About Us, Vision & Mission, Academics, Programs, Facilities, Admissions, Gallery, Contact
- Privacy Policy, Terms & Conditions, Refund Policy
- Brand colors: Primary Purple (#4B1F73), Secondary Magenta (#D81B60)
- Target audience: Parents searching for Nursery, LKG, UKG and Primary school admissions
- Professional, parent-friendly, and child-welcoming design

---

## Brand Identity
- **Name**: Punya Academy
- **Tagline**: The School of Innovation
- **Location**: Mangammanapalya, near HSR Layout, Bangalore, Karnataka
- **Colors**: 
  - Primary Purple: #4B1F73
  - Secondary Magenta: #D81B60
  - Background White: #FFFFFF
  - Text Dark: #2E2E2E
  - Light Grey: #F4F4F6

---

## User Personas
1. **Parents (Primary)**: Looking for quality education, safety, values-based learning
2. **Guardians**: Seeking information about admission process, fees, facilities
3. **Website Visitors**: Exploring school options, comparing facilities and programs

---

## Core Requirements (Static)
### Functional Requirements:
- Multi-page navigation with 12 pages
- Responsive design for all devices
- Contact and admission enquiry forms
- Gallery with category filtering
- Google Maps integration
- Social media links

### Design Requirements:
- Modern, professional, parent-friendly UI
- Consistent brand colors throughout
- High-quality images of school environment
- Clean typography and good spacing
- Smooth transitions and hover effects

---

## What's Been Implemented (December 5, 2025)

### Phase 1: Frontend with Mock Data ✅
**Date Completed**: December 5, 2025

#### Pages Created:
1. **Home Page**: Hero section, about preview, why choose us (8 cards), programs overview, admissions banner, facilities preview, gallery preview, footer CTA
2. **About Us**: Who we are, what makes us different, our commitment with 3 value cards
3. **Vision & Mission**: Vision statement, mission points, 8 core values cards
4. **Academics**: Academic approach, 9 key focus areas, 6 teaching methodologies, learning outcomes
5. **Programs**: Pre-Primary and Primary programs with detailed benefits and comparison
6. **Facilities**: 9 facility cards, campus images, safety & hygiene section
7. **Admissions**: 6-step admission process, eligibility criteria, documents required, fee structure, admission form (mock)
8. **Gallery**: 12 images with category filtering (Campus, Classrooms, Activities, Events)
9. **Contact**: Contact info cards, contact form (mock), Google Maps integration
10. **Privacy Policy**: Complete privacy policy with 11 sections
11. **Terms & Conditions**: Comprehensive T&C with 16 sections
12. **Refund Policy**: Detailed refund policy with 12 sections

#### Components Created:
- Navigation: Fixed header with logo, menu, CTA button, mobile responsive
- Footer: 4-column layout with about, quick links, legal links, contact info, social media
- Mock.js: Mock functions for form submissions (contact, admission, campus visit)

#### Design Implementation:
- Brand colors strictly followed
- Shadcn UI components used throughout
- Lucide React icons (no emoji icons)
- Professional card layouts with hover effects
- Gradient sections for CTAs
- Responsive grid layouts
- Clean, modern typography

#### Forms (Mock Functionality):
- Admission Enquiry Form: Parent name, child name, grade, phone, email, address, message
- Contact Form: Name, phone, email, subject, message
- Form submissions show success toasts (using Sonner)

---

## Architecture

### Frontend Stack:
- React 19.0.0
- React Router DOM for navigation
- Shadcn UI component library
- Tailwind CSS for styling
- Lucide React for icons
- Sonner for toast notifications

### Current State:
- **Frontend**: Complete with 12 pages, all forms working with mock data
- **Backend**: Not yet implemented
- **Database**: Not yet connected

---

## Prioritized Backlog

### P0 (High Priority - Next Phase):
1. Backend API development
   - User enquiry/contact endpoints
   - Admission form submission endpoint
   - Email notification system
2. Database integration
   - Contact submissions collection
   - Admission enquiries collection
   - Gallery images management
3. Admin panel for managing:
   - Admission enquiries
   - Contact form submissions
   - Gallery images

### P1 (Medium Priority):
1. Email integration (SendGrid/similar)
   - Auto-response for form submissions
   - Admin notifications
2. File upload for admission documents
3. Dynamic content management
4. SEO optimization
5. Performance optimization

### P2 (Low Priority - Future Enhancements):
1. Online fee payment integration
2. Parent portal for application tracking
3. Blog section for school updates
4. Event calendar
5. Student testimonials section
6. Virtual campus tour
7. Multi-language support

---

## Next Tasks
1. **Ask user if they want to proceed with backend development**
2. If yes, implement:
   - MongoDB models for contacts and admissions
   - FastAPI endpoints for form submissions
   - Email notification system
   - Frontend-backend integration (remove mock data)
3. Testing of complete flow
4. Deployment preparation

---

## Notes
- All forms currently use mock data and show success messages
- Images are from stock photo sources (Unsplash, Pexels)
- Contact details are placeholders (phone: +91 XXXXXXXXXX)
- Google Maps shows HSR Layout, Bangalore area
- Website is fully responsive and follows modern design practices
- No dark gradients or emoji icons used (as per guidelines)

---

**Last Updated**: December 5, 2025
