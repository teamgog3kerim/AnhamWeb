# ANHAMA Trading PLC Website

## Overview

This is a modern web application for ANHAMA Trading PLC, an Ethiopian trading company specializing in construction machinery, gold mining, and agricultural exports. The application serves as a corporate website showcasing the company's services, providing contact functionality, and establishing their brand presence online. Built as a full-stack application, it features a React-based frontend with a Node.js/Express backend, designed to be professional, responsive, and user-friendly.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with React 18 using TypeScript and follows a modern component-based architecture. The application uses Vite as the build tool for fast development and optimized production builds. The UI is constructed with shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable components. Styling is handled through Tailwind CSS with a custom design system featuring CSS variables for consistent theming.

**Key Frontend Decisions:**
- **React with TypeScript**: Chosen for type safety and better developer experience
- **Vite**: Selected over Create React App for faster builds and better dev experience
- **shadcn/ui + Radix UI**: Provides accessible, unstyled components that can be customized
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Wouter**: Lightweight routing library instead of React Router for smaller bundle size
- **Framer Motion**: Animation library for smooth, professional transitions and interactions

### Backend Architecture
The server follows a RESTful API design pattern using Express.js with TypeScript. The architecture is modular with separate concerns for routing, storage, and server configuration. The application uses an in-memory storage implementation with an interface design that allows for easy migration to a persistent database solution.

**Key Backend Decisions:**
- **Express.js**: Proven, minimal web framework for Node.js
- **TypeScript**: Ensures type safety across the entire application
- **Modular Architecture**: Separation of concerns with dedicated files for routes, storage, and server setup
- **Interface-based Storage**: Allows switching between memory and database storage implementations
- **Middleware Pattern**: Logging and error handling implemented as Express middleware

### Data Management
The application uses Drizzle ORM with PostgreSQL for data persistence, though currently implements an in-memory storage solution. The schema is defined using Drizzle's type-safe schema builder, with Zod for runtime validation. TanStack Query (React Query) handles client-side data fetching, caching, and synchronization.

**Key Data Decisions:**
- **Drizzle ORM**: Type-safe ORM that generates types from schema
- **PostgreSQL**: Robust relational database for production use
- **Zod Schema Validation**: Runtime type checking and form validation
- **TanStack Query**: Sophisticated data fetching and caching solution
- **Shared Schema**: Single source of truth for data types between client and server

### Development and Build Process
The project uses a monorepo structure with shared TypeScript configurations and dependencies. The build process is optimized for both development and production environments, with separate configurations for client and server builds.

**Key Tooling Decisions:**
- **ESM Modules**: Modern module system throughout the project
- **Shared TypeScript Config**: Consistent compiler options across client/server
- **Path Aliases**: Clean imports using @ and @shared prefixes
- **Development Hot Reload**: Vite HMR for fast development iteration

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Unstyled, accessible UI components
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library with consistent design

### Data and State Management
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL database service (@neondatabase/serverless)
- **TanStack Query**: Data fetching and caching library
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for server builds
- **PostCSS**: CSS processing with Autoprefixer

### Server Infrastructure
- **Express.js**: Web application framework for Node.js
- **connect-pg-simple**: PostgreSQL session store (for future session management)

### Fonts and Assets
- **Google Fonts**: Web fonts including Inter, Architects Daughter, DM Sans, Fira Code, and Geist Mono
- **Unsplash Images**: High-quality stock photography for construction, mining, and agricultural content

The application is designed to be deployed on Replit with development-specific plugins and configurations for the Replit environment, including error overlay and cartographer plugins for enhanced development experience.

## Running on Replit

- Install the declared Node.js dependencies, then start the app with `npm run dev`.
- The application serves the website and API on port `5000`; the `Start application` workflow runs this command.
- Run `npm run check` for TypeScript validation and `npm run build` for a production build.
- AI chat requires `AI_INTEGRATIONS_OPENAI_API_KEY` (and optionally `AI_INTEGRATIONS_OPENAI_BASE_URL`). Without the key, the website still runs, but chat responds that it is not configured.