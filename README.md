# Forescribe | DASHBOARD

A high-performance, pixel-perfect landing page built with **Next.js 16 (App Router)** and **TypeScript**. This project features a sophisticated staggered grid system, custom animations, and robust form handling.

## 🚀 Live Demo

[**View the Live Application on Vercel**](https://forescribe-dashboard-7585.vercel.app/))
---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS (Utility-first) |
| **Animations** | Framer Motion |
| **Forms** | React Hook Form |
| **Icons** | React Icons |

---

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/forescribe.git](https://github.com/your-username/forescribe.git)
    cd forescribe
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the result.

---
## 💡 Key Features

* **OAuth Form Validation:** Integrated `react-hook-form` to handle a mandatory "Terms of Service" checkbox.
* **Staggered Masonry Grid:** Implemented a custom 5-column grid that collapses to a single column on mobile.
* **Performance Optimization:**
    * **Dynamic Imports:** Used `next/dynamic` to split code chunks.
    * **Next Image:** Automated WebP conversion and priority loading.

---

## ✅ Requirements Checklist

- [x] **React Hooks:** Managed loading states with `useState` and form validation with `useForm`.
- [x] **Advanced Animations:** Used `AnimatePresence` and `motion.div`.
- [x] **TypeScript:** Full type safety.
- [x] **Performance:** Dynamic components implemented.
## 📂 Directory Structure

```text
├── app/
│   ├── components/      # Reusable UI components
│   ├── animations/      # Framer Motion variants
│   └── page.tsx         # Main entry point
├── public/              # Static assets (Logos & Images)
└── tailwind.config.ts   # Custom theme config
