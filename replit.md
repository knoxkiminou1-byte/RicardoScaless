# Ricardo Scales Website

## Overview

This is a React-based promotional website for Ricardo Scales, "The Black Liberace," a renowned pianist and composer from San Francisco. The site showcases his musical legacy, biography, and features an integrated YouTube music player with his catalog of works. Built with Vite, React, and Tailwind CSS, the application provides a performant, elegant presentation of Ricardo's five-decade career, his triumph over adversity, and his contributions to "Third Stream" music.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18.2.0 with JSX for component architecture
- Vite 5.0.0 as the build tool and development server, chosen for fast HMR (Hot Module Reloading) and optimized production builds
- Single Page Application (SPA) pattern with potential for client-side routing via react-router-dom 7.7.1

**Styling Strategy**
- Tailwind CSS 4.1.11 for utility-first styling with PostCSS and Autoprefixer for cross-browser compatibility
- Custom CSS in App.css for specialized animations and legacy section grid layouts
- Google Fonts integration (Playfair Display, Inter, Dancing Script, Allura) for elegant typography matching the artist's brand
- Dark theme with gold/yellow accent colors (#C28840, #ffd700) reflecting the "Black Liberace" branding

**Component Structure**
- App component serves as the main entry point
- Responsive design with mobile-first approach (breakpoint at 768px)
- Fixed navigation header with mobile hamburger menu pattern
- Hero section with gradient backgrounds and animated text effects

### Music Player Feature

**Data Management**
- Static JSON data file (`public/music.json`) containing track metadata:
  - YouTube video IDs
  - Track titles, artist, duration, view counts
  - Local WebP thumbnail references
- Lazy-loaded images with srcset for responsive images (320px and 640px variants)

**Media Optimization**
- WebP image format for thumbnails at 320x320px, target size under 120KB
- Sharp library (0.34.4) for server-side image processing and conversion
- YouTube iframe API integration for embedded video playback
- Inline player that appears on card click with autoplay functionality

**Performance Strategy**
- Lazy loading for images and video iframes
- Preloading strategy for critical CSS and system fonts
- Grid layout responsive design (2 columns mobile, 4-5 columns desktop)
- Target Lighthouse score of 90+

### Build Scripts

**Music Data Builder** (`scripts/buildMusicData.js`)
- YouTube Data API v3 integration via googleapis package (163.0.0)
- Automated track search and metadata extraction
- OAuth token management with Replit Connectors system
- Generates structured music.json catalog

**Thumbnail Downloader** (`scripts/downloadThumbnails.js`)
- Downloads YouTube thumbnails via img.youtube.com service
- Converts to WebP format using Sharp
- Adaptive quality adjustment to meet 120KB size target
- Stores optimized images in `/public/covers/` directory

### Development Configuration

**Vite Configuration**
- Development server on port 5000 with host `0.0.0.0` for Replit compatibility
- HMR configured for localhost client connection
- React plugin with Fast Refresh enabled

**TypeScript Support**
- TSConfig present for future TypeScript migration capability
- Currently using JSX with allowJs disabled for type safety preparation

## External Dependencies

### Third-Party Services

**YouTube Integration**
- YouTube Data API v3 for video metadata retrieval
- YouTube iframe embed API for video playback
- YouTube thumbnail service (img.youtube.com) for cover images
- OAuth 2.0 authentication via Replit Connectors

**Replit Platform Services**
- Replit Connectors API for YouTube OAuth credential management
- Environment variables: `REPLIT_CONNECTORS_HOSTNAME`, `REPL_IDENTITY`, `WEB_REPL_RENEWAL`
- Token refresh mechanism for long-lived API access

### NPM Dependencies

**Core Libraries**
- `react` & `react-dom` (18.2.0): UI framework
- `react-router-dom` (7.7.1): Client-side routing capabilities
- `googleapis` (163.0.0): YouTube API client library
- `sharp` (0.34.4): High-performance image processing

**Development Tools**
- `vite` (5.0.0): Build tool and dev server
- `@vitejs/plugin-react` (4.2.0): React Fast Refresh and JSX transform
- `tailwindcss` (4.1.11): Utility-first CSS framework
- `postcss` (8.5.6) & `autoprefixer` (10.4.21): CSS processing pipeline
- `typescript` (5.2.2): Type definitions and future migration support

**Font & Asset Loading**
- Google Fonts CDN for web typography
- Local static assets in `/public/` directory including profile images
- Attached assets folder for historical content and documentation

### Browser APIs
- YouTube iframe API (loaded dynamically)
- Intersection Observer (implied for lazy loading)
- Fetch API for data retrieval and OAuth token management