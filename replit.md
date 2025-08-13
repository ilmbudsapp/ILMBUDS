# ILMBUDS - Islamic Children's Educational App

## Overview

ILMBUDS is a comprehensive Islamic educational mobile application designed for children. It aims to provide an interactive learning experience through quizzes, stories, Quran learning, religious teachings (Ilmihal), and educational cartoons. The project is built as a Progressive Web App (PWA) and deployed natively on mobile using Capacitor, supporting multiple languages and integrating AdMob for monetization. The vision is to offer an accessible and engaging platform for Islamic education for children globally.

## User Preferences

Preferred communication style: Simple, everyday language in Serbian (Latin script).
**CRITICAL**: Never take any actions without explicit user instruction - wait for user commands before proceeding.
**IMPORTANT**: When user asks questions, only provide answers - do not take any actions or make changes unless explicitly requested.
Language preference: Serbian (Latin script) for all communication.
UI Design: Maintain glass effects with metallic shimmer animations and gradient colors for all cards on home page.
Recent Issues: User reported UI regressions requiring rollbacks - important to preserve glass effects and original card designs.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: Wouter
- **State Management**: React Context API (UserContext, QuizContext, LanguageContext, ThemeContext)
- **UI Components**: Radix UI with shadcn/ui styling
- **Styling**: Tailwind CSS with custom theme
- **Animation**: Framer Motion
- **PWA**: Service Worker for offline capabilities

### Backend
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **API**: RESTful API with TypeScript
- **Authentication**: Simple session-based authentication

### Mobile
- **Platform**: Capacitor for cross-platform native deployment (primarily Android)
- **Monetization**: AdMob integration for banner, interstitial, and rewarded ads.
- **App ID**: com.ilmbuds.app

### Key Features
- **User Management**: Role-based (Child/Parent), gamification (points, badges), profile management.
- **Quiz System**: Category-based, multiple difficulty levels, progress tracking, multilingual content, audio feedback.
- **Content Sections**: Dedicated sections for Quizzes, Stories, Quran learning, Ilmihal, and Cartoons.
- **Internationalization**: Support for English, Albanian, Bosnian, German, Italian, with centralized translation system and dynamic content switching.
- **Monetization**: AdMob integration with child-safe configuration.

### Data Flow
- **User Authentication**: Express API handles registration/login, session stored locally, React Query fetches data, Context providers manage state.
- **Quiz Flow**: Categories from DB, dynamic question loading, real-time progress tracking, results saved, points/badges awarded.
- **Content Delivery**: Static assets from public directory, dynamic content from PostgreSQL, translations from shared module, audio files cached.

### Deployment Strategy
- **Web**: Vite builds to `dist/public`, Express server built with ESBuild to `dist/index.js`, served from Express static middleware.
- **Mobile**: Android via Capacitor, built with `capacitor build android`, configured in `capacitor.config.ts`. Distribution targets Google Play Store.
- **Database Management**: Drizzle Kit for schema migrations (`npm run db:push`).
- **Development Workflow**: Monorepo structure with shared schema and translations, `npm run dev` for development, `npm run check` for type checking, `npm run build` for production, `npm run start` to run production server.

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting.
- **Drizzle ORM**: Type-safe database queries.

### Third-Party Services
- **SendGrid**: Email delivery.
- **AdMob**: Mobile advertising platform.
- **YouTube**: Video content embedding.
- **Google Fonts**: Typography (Poppins, Montserrat, Scheherazade).