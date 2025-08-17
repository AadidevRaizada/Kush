# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js application for space-themed event registration and exploration. The app features an interactive 3D Spline animation as the landing experience, transitioning to an event booking interface where users can browse and register for astronomy events.

## Technology Stack

- **Framework**: Next.js 15.4.6 with React 19
- **Styling**: Tailwind CSS 4.1.12 with custom CSS
- **3D Graphics**: Spline React component (@splinetool/react-spline)
- **Animations**: Framer Motion 12.23.12
- **Utilities**: clsx for conditional class names

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### App Router Structure
The app uses Next.js App Router with the following structure:
- `app/layout.js` - Root layout with metadata and global styles
- `app/page.js` - Main landing page with Spline integration and event carousel
- `app/events/[event-id]/page.js` - Dynamic event detail pages
- `app/globals.css` - Global styles and Tailwind imports
- `app/space-theme.css` - Custom space-themed component styles

### Key Components
- `GradientText.js` - Reusable gradient text component
- `RotatingText.js` - Animated rotating text with configurable interval
- `ProfileCard.js` - Event profile card for featured events

### State Management
The main page uses React useState for:
- `viewState` - Controls switching between Spline view and carousel view
- `selectedPlanet` - Tracks clicked planet from Spline interaction
- `selectedEvent` - Manages event selection for registration

### Spline Integration
- 3D scene hosted at: `https://prod.spline.design/Anw0YQXiyB8JZ7KX/scene.splinecode`
- Handles planet click events through `onPointerUp` with target name detection
- Global click handler for transitioning to event carousel

### Event Data
Events are currently stored as mock data in `app/page.js`. Each event has:
- `id` - Unique identifier
- `title` - Event name
- `date` - Event date string
- `description` - Brief description
- `featured` - Boolean for featured status
- `detailsPath` - Route to detail page (null if not implemented)

### External Integration
Registration links to Google Forms via `GOOGLE_FORM_URL` constant in both main page and event detail pages.

## Styling Architecture

### CSS Organization
- Tailwind utilities for layout and basic styling
- Custom CSS in `space-theme.css` for complex animations and theming
- Global utilities in `globals.css` for scrollbar hiding and GPU transforms

### Key CSS Classes
- `.spline-view` / `.booking-view` - Main view containers with display toggling
- `.gradient-text` - Text with space-themed gradient
- `.rotating-text` - Container for animated text rotation
- `.profile-card` - Styled event profile cards
- `.sticky-cta` - Fixed bottom registration button

## Development Notes

### Component Patterns
- All interactive components use `'use client'` directive
- Event handlers include console logging for analytics tracking
- Accessibility features with ARIA labels and keyboard navigation
- External links use `noopener,noreferrer` for security

### Performance Considerations
- Views use `display: none` instead of CSS transitions for instant switching
- GPU-accelerated transforms via `.transform-gpu` utility
- Spline component handles its own loading and rendering

### Event Registration Flow
1. User interacts with Spline scene or clicks "explore events"
2. Carousel view displays with featured event and grid
3. Event selection updates UI with sticky CTA
4. Registration opens external Google Form in new tab