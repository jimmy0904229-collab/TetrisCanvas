# Tetris Game Project

## Overview

This is a full-stack Tetris game application built with a modern web technology stack. The project combines a classic Tetris game implementation with a React-based frontend architecture and Express.js backend. The game features traditional Tetris mechanics including piece movement, rotation, line clearing, and progressive difficulty levels. The application includes both a standalone HTML/CSS/JavaScript implementation and a modern React component system with shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React Application**: Built with TypeScript and Vite as the build tool
- **UI Framework**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Game Implementation
- **Dual Implementation**: 
  - Standalone HTML5 Canvas-based Tetris game (index.html, script.js, style.css)
  - Modern React component architecture ready for integration
- **Game Features**: Classic Tetris mechanics with piece rotation, line clearing, scoring system, and level progression
- **Responsive Design**: Mobile-friendly controls and layout
- **Retro Aesthetics**: Classic arcade game styling with vibrant Tetris piece colors

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Development Setup**: Vite integration for hot module replacement in development
- **Static File Serving**: Configured to serve both React app and standalone Tetris game
- **Middleware**: JSON parsing, URL encoding, request logging, and error handling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database migrations

### Authentication & Session Management
- **Session Store**: PostgreSQL-based sessions using connect-pg-simple
- **User Management**: Basic user schema with username/password authentication
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

### Development Tools
- **Build System**: Vite with TypeScript compilation
- **Package Management**: npm with lockfile for dependency consistency
- **Development Server**: Hot reload and automatic restart capabilities
- **Code Quality**: TypeScript strict mode with comprehensive type checking

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm** & **drizzle-kit**: Type-safe ORM and migration tools
- **express**: Web application framework
- **react** & **react-dom**: Frontend framework and rendering
- **@tanstack/react-query**: Server state management and caching

### UI Component System
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **shadcn/ui**: Pre-built component library built on Radix UI
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Form and Validation
- **react-hook-form**: Performant form library
- **@hookform/resolvers**: Form validation resolvers
- **zod**: TypeScript-first schema validation

### Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **typescript**: Type checking and compilation
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution for development

### Additional Utilities
- **date-fns**: Date manipulation library
- **clsx** & **tailwind-merge**: Conditional CSS class utilities
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel component