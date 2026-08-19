# AETHERIA BIO - Quantum Genomics & Synthetic Biology Platform

> **A Premium, Animation-Driven Biotechnology Landing Page** built with Next-Generation Frontend Architecture, 3D WebGL Canvas Visualizations, Web Audio API Sound Feedback, and WCAG 2.1 AA Accessibility Standards.

---

## Overview & Design Philosophy

**AETHERIA BIO** is a flagship biotechnology landing page showcasing cutting-edge computational genomics, targeted CRISPR Cas13 gene editing, and de novo AI protein folding. Designed for enterprise pharmaceutical partners and biotechnology research institutes, the application combines high-impact bioluminescent visual aesthetics with deep frontend engineering.

### Design Inspiration & References
- Inspired by modern sci-fi biotech aesthetics (*DeepPiction*, *Dribbble Biotech Animation Concepts*).
- Built with a unique **Bioluminescent Glassmorphic Visual Identity** featuring deep space void backdrops (`#030712`), neural cyan highlights (`#00f2fe`), emerald gene bioluminescence (`#10b981`), and quantum violet pulses (`#8b5cf6`).

---

## Architecture & Software Design Patterns

The project follows enterprise frontend software design principles for maximum maintainability, scalability, and clean code separation:

### 1. Feature-Based Architecture
Files are grouped by functional feature domains rather than technical type alone:
```
src/
├── assets/                  # Graphics & assets
├── components/              # Shared UI design system (Button, Badge, Modal)
├── context/                 # Global Context API providers (Accessibility, Sound)
├── HOC/                     # Higher-Order Components (withScrollReveal, withGlassmorphicCard)
├── hooks/                   # Custom React Hooks (useLenis, useReducedMotion, useAudioFeedback)
├── layouts/                 # Layout Pattern components (MainLayout, SectionLayout, ContainerLayout)
├── features/                # Feature-based domain modules
│   ├── navigation/          # Glassmorphic Header, Audio Toggle & Accessibility Controls Drawer
│   ├── hero/                # Hero Headline, Status Badges & 3D Interactive DNA Canvas
│   ├── about/               # Quantum Innovation Framework & Interactive Bio-Tabs
│   ├── technology/          # Interactive CRISPR-Cas13 Live Sequence Splicer & Research Pipeline
│   ├── capabilities/        # Enterprise Bio-Platform Grid with Light-Beam Glare Followers
│   ├── impact/              # Animated Counter Metrics & Clinical Trial Benchmarks
│   ├── cta/                 # Bioluminescent Particle Canvas & Enterprise Demo Request Form
│   └── footer/              # Live Cluster Status Ticker & Compliance Links
└── types/                   # TypeScript interfaces & domain models
```

### 2. Container-Presentational Pattern
Clear separation between state management/interaction logic and purely aesthetic rendering:
- **Containers** (`HeroContainer.tsx`, `TechPipelineContainer.tsx`, `AboutContainer.tsx`): Handle mouse coordinates, sequence splicing calculations, audio triggers, and confetti celebrations.
- **Presenters** (`HeroPresenter.tsx`, `TechPipelinePresenter.tsx`, `AboutPresenter.tsx`): Focus strictly on UI rendering, layout composition, and design system tokens.

### 3. Layout Pattern
- `MainLayout`: Manages Lenis smooth inertia scroll and skip-to-content focus links.
- `SectionLayout`: Standardizes section padding, ambient background light orbs, section badges, and ARIA landmark headings.
- `ContainerLayout`: Ensures max-width responsive grid boundaries (`max-w-7xl`).

### 4. Custom Hooks Pattern
- `useLenis`: Smooth inertia scroll integration.
- `useReducedMotion`: Detects OS motion settings (`prefers-reduced-motion: reduce`) and disables 3D rotations or heavy particle updates.
- `useAudioFeedback`: Triggers Web Audio API procedural sound synthesis for hover, click, splice, and success actions.

### 5. Context API Pattern
- `AccessibilityContext`: Manages WCAG display preferences (Reduced Motion, High Contrast Mode, Large Typography, Dyslexic-Friendly Font).
- `SoundContext`: Synthesizes Web Audio API sound ticks/chimes with local storage persistence.

### 6. Higher-Order Component (HOC) Pattern
- `withScrollReveal(Component)`: Wraps presentational components with scroll reveal entrance animations via Framer Motion.
- `withGlassmorphicCard(Component)`: Decorates presentational cards with dynamic mouse glare illumination followers.

---

## Interactive Animation & Visual Features

1. **3D Interactive DNA Double Helix (`DnaHelixCanvas.tsx`)**:
   - Custom 3D math rendering 28 nucleotide base pairs, hydrogen bond connections, and 120 orbiting bioluminescent particles.
   - Reacts dynamically to mouse movements with smooth camera tilt inertia.
2. **Interactive CRISPR-Cas13 Gene Sequence Splicer (`GeneEditorWidget.tsx`)**:
   - Allows users to click nucleotide base pairs (`A`, `T`, `C`, `G`) to mutate the genome in real-time.
   - Calculates Protein Stability Index (e.g. `98.4%`), Gibbs Free Energy ($\Delta G$), and triggers confetti celebratory bursts when reaching 100% optimal binding!
3. **Bioluminescent Particle Canvas (`BioluminescentCanvas.tsx`)**:
   - Floating organic light particles background in the final CTA banner.
4. **Web Audio API Procedural Sound Synthesis**:
   - Provides futuristic UI audio feedback for user interactions without requiring heavy audio asset files.

---

## WCAG 2.1 Level AA Accessibility Compliance

- **Semantic Keyboard Buttons**: All capability cards and tabs are rendered using semantic `<button>` elements with keyboard handlers (`Enter` / `Space`) and cyan focus rings (`:focus-visible`).
- **Motion Controls**: Respects system `prefers-reduced-motion` and provides a manual toggle in the Accessibility Drawer.
- **Screen Reader Support**: `aria-live="polite"` regions for gene editor stability updates, `sr-only` descriptions for 3D canvases, and proper `role="dialog"`, `role="tablist"`, `aria-selected` attributes.
- **High Contrast & Typography Options**: Dedicated accessibility settings drawer for font size scaling and contrast adjustments.

---

## Setup & Local Installation

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Biotech-Animated-Landing-Page.git
   cd Biotech-Animated-Landing-Page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Automated ESLint Verification**:
   ```bash
   npm run lint
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```


7. **Deploy to Vercel**:
   ```bash
   npx vercel
   ```
   Or connect your GitHub repository directly to [Vercel Dashboard](https://vercel.com/new).

---

## Vercel Deployment Configuration

The repository includes a pre-configured [`vercel.json`](file:///d:/Practice/Biotech/Biotech-Animated-Landing-Page/vercel.json) file for 1-click zero-config deployment:

- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **SPA Rewrites**: `/(.*) -> /index.html` (prevents 404s on page refresh/routing)

---


## Git Commit History Workflow

This project was developed incrementally using structured git commits:
1. `feat(config)`: initialize React Vite TypeScript project with Tailwind CSS and WebGL dependencies
2. `feat(architecture)`: set up Context API, Lenis hook, Web Audio API, HOCs, and Layout patterns
3. `feat(ui)`: build reusable accessible Button, Badge, and Modal components with sound triggers
4. `feat(navigation)`: build accessible glassmorphic navbar with sound feedback and WCAG drawer
5. `feat(hero)`: implement Hero section with 3D interactive DNA helix WebGL canvas
6. `feat(about)`: create quantum innovation framework with interactive tab visualizer
7. `feat(technology)`: build interactive CRISPR-Cas13 gene sequence editor and research pipeline
8. `feat(capabilities-impact)`: add capability grid with glassmorphic glare HOC and animated counter impact metrics
9. `feat(cta-footer)`: implement bioluminescent particle CTA, status ticker footer, and App component
10. `docs`: add comprehensive README with architectural documentation and setup instructions
11. `perf(opt)`: enforce max 100 lines per file, add React.memo, useCallback, useMemo, and React.lazy code splitting
12. `fix(context)`: wrap App with AccessibilityProvider and SoundProvider at root level in main.tsx
13. `fix(accessibility-lint-readme)`: add semantic button accessibility for capability cards, ESLint configuration, and fix README encoding & setup ports

---

## Submission & Deliverables

- **GitHub Repository**: [Biotech-Animated-Landing-Page](https://github.com/your-username/Biotech-Animated-Landing-Page)
- **Submission Form**: https://forms.gle/h4cgxChvHhYzzKvZ8
- **License**: MIT