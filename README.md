
Forescribe | Enterprise SaaS Landing Page
A high-performance, pixel-perfect landing page built with Next.js 16 (App Router) and TypeScript. This project features a sophisticated staggered grid system, custom animations, and robust form handling.
🚀 Live Demo
Insert your Vercel/Netlify link here

🛠️ Tech Stack
Framework: Next.js 16 (App Router)

Language: TypeScript (Strict Mode)

Styling: Tailwind CSS (Utility-first CSS)

Animations: Framer Motion (Orchestrated entrance & hover states)

Forms: React Hook Form (Validation & State management)

Icons: React Icons (Official Brand Assets)

📦 Installation & Setup
1.Clone the repository:
  Bash: git clone https://github.com/your-username/forescribe.git 
        cd forescribe
2.Install dependencies:
  Bash: npm install
3.Run the development server:
  Bash: npm run dev
Open http://localhost:3000 to view the result.
📂 Directory Structure
The project follows a modular, component-based architecture:
├── app/
│   ├── components/         # Reusable UI components (WelcomeSection, GridLayout, etc.)
│   ├── animations/         # Framer Motion variants and keyframes
│   ├── layout.tsx          # Global providers and metadata
│   └── page.tsx            # Main entry point with dynamic imports
├── public/                 # Static assets (Optimized images, brand logos)
├── tailwind.config.ts      # Custom theme, shimmer animations, and brand colors
└── tsconfig.json           # TypeScript configuration
💡 Additional Features & Improvements
Beyond the basic requirements, the following enhancements were implemented to ensure production-grade quality:

OAuth Form Validation: Integrated react-hook-form to handle a mandatory "Terms of Service" checkbox. Even though the login is Social-based, this ensures legal compliance and demonstrates advanced state handling.

Staggered Masonry Grid: Implemented a custom 4-3-4-3-4 pattern grid that uses CSS break-properties and Framer 
Motion's staggerChildren for a "waterfall" loading effect.

Performance Optimization: * Dynamic Imports: Heavily used next/dynamic to split code chunks, reducing the initial JS bundle size.

Next Image: Automated WebP conversion and priority loading for the Hero background to achieve high LCP (Largest Contentful Paint) scores.
🔍 Assumptions
During development, the following assumptions were made:

Authentication Flow: Since this is a frontend-focused assignment, the Google and Microsoft buttons simulate an API call with a 2-second loading state.

Asset Handling: External brand logos (Notion, Figma, etc.) are treated as local assets for maximum loading speed and to prevent 404s from external CDNs.

Responsiveness: The layout assumes a modern desktop-first approach but uses Tailwind's responsive prefixes to collapse the 5-column grid into a single column for mobile devices.
✅ Requirements Checklist
[x] React Hooks: Managed loading states with useState and form validation with useForm.

[x] Advanced Animations: Used AnimatePresence for error messages and motion.div for layout transitions.

[x] TypeScript: Full type safety for component props and form inputs.

[x] Performance: Optimized Image components and Dynamic components implemented.

Micro-interactions: Custom "Shimmer" gradient effect on the primary CTA buttons and glassmorphism (backdrop-blur) on the authentication card.
