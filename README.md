# Simple Booking Interface 📅

> A modern, full-featured booking interface for counselling services

Built with **Next.js 15**, **TypeScript**, **Shadcn UI**, and **Tailwind CSS**

---

## 🚀 Quick Start

```bash
npm install      # Install dependencies
npm run dev      # Start development server
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Documentation Hub

**👉 New here? Start with:** [START_HERE.md](START_HERE.md) ⭐

### Essential Guides

- **[START_HERE.md](START_HERE.md)** - Your entry point to the project
- **[GETTING_STARTED.md](GETTING_STARTED.md)** - Comprehensive setup guide
- **[SETUP.md](SETUP.md)** - Installation instructions
- **[COMMANDS.md](COMMANDS.md)** - Quick command reference

### Detailed Documentation

- **[PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** - Complete project details
- **[DOCUMENTATION.md](DOCUMENTATION.md)** - Technical documentation
- **[SUBMISSION_CHECKLIST.md](SUBMISSION_CHECKLIST.md)** - Submission guide
- **[PROJECT_SUMMARY.txt](PROJECT_SUMMARY.txt)** - Executive summary

---

## Features

### Core Functionality

- ✅ **Weekly Calendar Grid**: 7 days × 8 time slots (9am–5pm)
- ✅ **Slot Selection**: Single slot selection with visual feedback
- ✅ **Booking Confirmation**: Modal dialog for confirming bookings
- ✅ **State Management**: useReducer for global state management
- ✅ **LocalStorage Persistence**: Bookings persist across sessions
- ✅ **Responsive Design**: Optimized for both desktop and mobile

### Bonus Features

- ✨ **Available Slots Filter**: Toggle to show only available slots
- ✨ **Framer Motion Animations**: Smooth transitions and interactions
- ✨ **Toast Notifications**: Success/error messages using Sonner
- ✨ **Dark Mode**: Full dark mode support with next-themes
- ✨ **Accessibility**: ARIA labels, keyboard navigation, and focus management
- ✨ **Status Indicators**: Visual badges and icons for slot states

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: Shadcn UI
- **Styling**: Tailwind CSS
- **State Management**: useReducer + Context API
- **Animations**: Framer Motion
- **Notifications**: Sonner
- **Icons**: Lucide React
- **Dark Mode**: next-themes

## Project Structure

```
Simple_Booking_Interface/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main booking page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── switch.tsx
│   │   └── badge.tsx
│   ├── BookingCalendar.tsx # Calendar grid component
│   ├── TimeSlotCard.tsx    # Individual slot card
│   ├── BookingModal.tsx    # Confirmation modal
│   ├── BookingHeader.tsx   # Header with stats and controls
│   └── ThemeToggle.tsx     # Dark mode toggle
├── context/
│   └── BookingContext.tsx  # Global state management
├── data/
│   └── booking-data.ts     # Initial booking data
├── types/
│   └── booking.ts          # TypeScript interfaces
├── lib/
│   └── utils.ts            # Utility functions
└── package.json
```

## Getting Started

### Installation

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Usage

1. **View Available Slots**: The calendar displays all time slots for the week
2. **Filter Slots**: Toggle "Show Available Only" to filter booked slots
3. **Select a Slot**: Click on an available slot to select it
4. **Confirm Booking**:
   - Click "Confirm Booking" button
   - Enter your name in the modal
   - Confirm to book the slot
5. **Dark Mode**: Toggle dark/light mode using the theme button

## State Management

The application uses `useReducer` for state management with the following actions:

- `SET_SLOTS`: Initialize or update all slots
- `SELECT_SLOT`: Select/deselect a time slot
- `BOOK_SLOT`: Mark a slot as booked
- `TOGGLE_FILTER`: Toggle available slots filter
- `LOAD_FROM_STORAGE`: Load bookings from localStorage

## Accessibility Features

- ✅ ARIA labels for screen readers
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ High contrast mode support
- ✅ Semantic HTML

## Responsive Design

- **Desktop (>1024px)**: 7-column grid layout
- **Tablet (768px-1024px)**: Vertical stack with multi-column slots
- **Mobile (<768px)**: Optimized single-column layout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Key Design Decisions

1. **useReducer**: Chosen for predictable state updates and easier debugging
2. **localStorage**: Simple persistence solution for client-side data
3. **Framer Motion**: Smooth animations enhance user experience
4. **Shadcn UI**: Provides consistent, accessible components
5. **Responsive-First**: Mobile and desktop optimized layouts

## Future Enhancements

- Backend API integration
- User authentication
- Email notifications
- Calendar export functionality
- Multi-week view
- Recurring bookings
- Admin dashboard

## License

This project is created for assessment purposes.

## Author

Created as part of the Simple Booking Interface assessment.
