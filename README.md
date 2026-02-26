# TechStore - Premium E-Commerce Experience

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

TechStore is a state-of-the-art, high-performance electronics e-commerce platform built with a focus on **visual excellence**, **smooth interactions**, and **robust architecture**. Designed with a "Premium-First" philosophy, it leverages the latest web technologies to provide a seamless high-end shopping experience.

---

## ✨ Key Features

### 🛒 Advanced Shopping Cart
- **Persistent State**: Cart items are saved to `localStorage` for cross-session persistence.
- **Real-time Updates**: Instant quantity updates and removal with dynamic total calculations.
- **Toast Notifications**: Interactive feedback via `sonner` for every user action.

### 💳 Seamless Checkout Workflow
- **Multi-Step Logic**: Modularized shipping, payment selection, and order summary components.
- **Smart Pre-fill**: Automatically detects logged-in users to pre-populate shipping details.
- **Security Focused**: Visual trust badges and secure UI patterns for a professional feel.

### ❤️ Personalized Wishlist (Favorites)
- **Interactive Toggling**: Heart buttons integrated into every product card (Grid, List, and Best Seller slider).
- **Protected Access**: Sophisticated authentication guard that redirects guests to signup with helpful feedback.
- **Navbar Integration**: Real-time counter badge for favorited items.

### 🔍 Dynamic Product Catalog
- **Multi-Filter System**: Filter by category, brand, price range, and rating.
- **Search with Debounce**: High-performance search optimized to reduce unnecessary re-renders.
- **View Modes**: Toggle between high-density Grid and detailed List views.

### 🎨 Design & Motion
- **Premium Aesthetics**: Curated color palettes, glassmorphism effects, and custom typography.
- **GSAP Animations**: Advanced horizontal scroll pinning and stagger effects.
- **Framer Motion**: Smooth page transitions, micro-interactions, and reactive UI elements.

---

## 🛠️ Technical Stack

- **Core**: Next.js 16.1.6 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4.0, Lucide Icons
- **Animation**: GSAP (ScrollTrigger), Framer Motion, AOS
- **State Management**: React Context API (Modular Architecture)
- **UI Components**: Shadcn UI (Radix Primitives)
- **Data Fetching**: DummyJSON API integration
- **Validation**: Zod + React Hook Form

---

## 🏗️ Architecture Philosophy

The project follows a **Modular Feature-Based Architecture**:

- **Context Layer**: Centralized logic for Products, Cart, and Wishlist to ensure a single source of truth.
- **Component Layer**: Atomic design approach with reusable UI primitives (Shadcn) and complex feature components.
- **Guard Layer**: Client-side authentication and state-based redirects for protected routes.
- **Performance Layer**: Implementation of Skeleton loading screens, image optimization, and debounced inputs to maintain a low CLS (Cumulative Layout Shift).

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mahmoudfathydev-hub/tech.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

---

## 📄 Documentation

- **[Architecture.md](./ARCHITECTURE.md)**: Deep dive into the system design.
- **[Project_Structure.md](./PROJECT_STRUCTURE.md)**: Detailed folder hierarchy.
- **[Report.txt](./report.txt)**: Technical metrics and project analysis.

---

Built with ❤️ by **Mahmoud Fathy**
