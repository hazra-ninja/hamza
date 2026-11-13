# Carmin — Luxury Wedding Invitation (Template 16 Clone)

A pixel-perfect, feature-complete clone of the luxury wedding invitation [Template 16](https://invitations-agency.netlify.app/template-16/) built with **React 18**, **Tailwind CSS**, and **Vite**.

## ✨ Features & Micro-Interactions

- **Film Grain Texture Overlay**: Dynamic 6-frame procedural noise canvas overlay for analog warmth.
- **Background Music Player**: Floating audio toggle with animated SVG states, looping `music.m4a`, and auto-play trigger.
- **Untie the Ribbon Cover Gate**: Velvet ribbon untying video animation with skip fallback, audio coordination, and body-scroll lock.
- **Chandelier Hall Hero**: Dramatic typography in *Gloock*, *Familjen Grotesk*, and *Pinyon Script* with staggered fade-in entrance.
- **Interactive Velvet Curtains**: Sticky scroll section where dual velvet curtain panels glide apart (`translateX` + `skewY`), revealing the couple's handwritten letter.
- **Wax Seal Interactive Date Reveal**: Touch/pointer press-and-hold interaction that melts the wax seal, reveals the date word-by-word with progressive de-blurring, and triggers haptic feedback.
- **Horizontal Evening Itinerary**: Sticky scroll container that translates horizontally as the user scrolls, tracking 6 event milestones with a synchronized progress bar.
- **Venue Spotlight (Flashlight Effect)**: Interactive cursor/touch-following circular beam highlighting Palazzo Rosso's grand dining hall with real-time clip-path calculations and styled embedded Google Maps.
- **Dress Code Shades of Red**: 6 lipstick-inspired color columns (Oxblood, Garnet, Carmine, Rose, Blush, Ivory) that grow upward on scroll, alongside duotone lookbook figures.
- **Draggable Note Cards Deck**: Physics-based interactive card deck with touch/pointer dragging, velocity flinging, and infinite recycling.
- **Comprehensive RSVP System**:
  - Guest attendance choice (`Yes`, `No`, `Later`).
  - Conditional questionnaire: ceremony/dinner/party attendance, partner name, dynamic children counter with per-child inputs, 4-course menu options, allergy notes, drinks checklist, shuttle logistics, lodging requests, and song recommendations.
  - Celebratory multi-color confetti burst on confirmation.
  - Personalized table ticket pass.
  - High-resolution (1080×1500) canvas ticket generator with instant PNG download or native Web Share API export.
- **Accordion FAQ**: Interactive questions & answers.
- **Falling Rose Petals Finale**: Custom canvas particle animation with natural rotational drift and gentle wind sway.
- **Floating Reply Dock**: Intelligently toggles visibility based on scroll depth and RSVP section visibility.
- **Guest Personalization**: Supports `?g=GuestName` URL query parameter for personalized greetings, letters, and pre-filled form fields.
- **Calendar Integration**: Supports one-click Apple Calendar (`wedding.ics`) and Google Calendar integration.

## ⚙️ Easily Edit All Content & Static Data

All texts, dates, names, schedule, dress code, RSVP options, FAQs, and asset paths are consolidated in a single, well-documented configuration file:

👉 [src/data/invitationData.js](file:///Users/coderlust/Documents/hamza/src/data/invitationData.js)

You can customize the entire wedding invitation without touching any component code:
- **Couple details**: Bride & groom names, hero tagline, date display, Roman numeral date
- **Event & Calendar**: Title, start & end date/time, venue name, address, coordinates, parking note
- **Cover Gate**: Ribbon hint text, personalized greeting formats, skip button
- **Curtains Letter**: Salutation, heartfelt letter body, signature
- **Wax Seal**: Press hint, revealed date words (split by lines for progressive de-blurring)
- **Evening Schedule**: Milestones list with timestamps, event titles, descriptions, and color backgrounds
- **Venue Spotlight**: Address, directions text, map coordinates, and instructions
- **Dress Code**: Color shade swatches (hex codes and labels), lookbook captions, and attire advice
- **Good to Know (Notes Deck)**: Card titles, text, and planner contact phone number
- **RSVP Form & Ticket**: Deadline, attendance options, parts, menu, dietary placeholder, drinks checklist, shuttle logistics, and confirmation pass text
- **FAQ Items**: Add, edit, or remove questions & answers
- **Media Asset Paths**: Video, audio soundtrack, and picture paths

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

### 4. Preview Build
```bash
npm run preview
```

## 🎨 Color Palette & Typography

| Color | Hex | Role |
| --- | --- | --- |
| **Oxblood** | `#1f0408` | Deepest background |
| **Wine** | `#4a0a13` | Rich secondary tone |
| **Carmine** | `#8f1020` | Vibrant crimson accent |
| **Rose** | `#e9c6bf` | Soft romantic highlight |
| **Ivory** | `#f7ece8` | Warm paper contrast |
| **Ink** | `#2a0a0f` | High-contrast typography |

- **Gloock**: Display serif titles and dates
- **Familjen Grotesk**: Body copy, buttons, and navigation
- **Pinyon Script**: Cursive ampersands, signatures, and decorative accents

