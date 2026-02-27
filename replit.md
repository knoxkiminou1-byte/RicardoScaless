# Ricardo Scales - Personal Website

## Overview
A personal website for Ricardo Scales, a composer, civic virtuoso, and cultural pillar. The site showcases his music, biography, and contact information.

## Tech Stack
- **Frontend**: React 18 with Vite 5
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Language**: JavaScript (JSX)

## Project Structure
```
├── src/
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   ├── Home.jsx         # Home page
│   ├── Bio.jsx          # Biography page
│   ├── Music.jsx        # Music page
│   ├── Contact.jsx      # Contact page
│   ├── Footer.jsx       # Footer component
│   ├── App.css          # App styles
│   └── index.css        # Global styles
├── public/
│   ├── covers/          # Album cover images
│   ├── attached_assets/ # Photos and text assets
│   ├── music_links.json # Music data
│   ├── favicon.png      # Site favicon
│   └── _redirects       # Redirect rules
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration (port 5000, allowedHosts)
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## Running the Project
- **Dev server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`

## Contact Form
- Uses Formsubmit.co (AJAX endpoint) to send form submissions to ricardoscalespianist@gmail.com
- No backend required — works on static hosting (Vercel, Netlify, etc.)
- First submission triggers an email confirmation from Formsubmit to the recipient email
- Form includes: Name, Email, Event Type, Message fields with success/error feedback

## Recent Changes
- 2026-02-27: Fixed contact form to actually send messages
  - Added form submission logic using Formsubmit.co AJAX API
  - Updated all contact emails to ricardoscalespianist@gmail.com
  - Added form state management (controlled inputs, loading, success/error states)
  - Compatible with Vercel and other static hosting platforms
- 2026-02-12: Completed project import to Replit environment
  - Installed npm dependencies
  - Configured Vite for Replit proxy (allowedHosts, HMR on port 443)
  - Cleaned up duplicate workflows

## User Preferences
- Deploys to Vercel
- Contact email: ricardoscalespianist@gmail.com
