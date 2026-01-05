# Getting Started Guide

Welcome to the Simple Booking Interface! This guide will help you set up and run the project.

## 📋 Prerequisites

Before starting, ensure you have:

- **Node.js** v18.0.0 or higher ([Download](https://nodejs.org/))
- **npm** v9.0.0 or higher (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code recommended)

### Check Your Versions

```bash
node --version   # Should show v18.0.0 or higher
npm --version    # Should show v9.0.0 or higher
```

---

## 🚀 Installation Steps

### Step 1: Navigate to Project Directory

Open your terminal and navigate to the project folder:

```bash
cd C:\Users\DELL\Simple_Booking_Interface
```

Or if you're in a different location:

```bash
cd /path/to/Simple_Booking_Interface
```

### Step 2: Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI components
- Framer Motion
- And all other dependencies (~150MB)

**Expected time**: 2-5 minutes depending on your internet connection

### Step 3: Start Development Server

Once installation is complete, start the development server:

```bash
npm run dev
```

You should see output similar to:

```
   ▲ Next.js 15.1.0
   - Local:        http://localhost:3000
   - Network:      http://192.168.x.x:3000

 ✓ Ready in 2.5s
```

### Step 4: Open in Browser

Open your web browser and navigate to:

```
http://localhost:3000
```

You should see the booking interface! 🎉

---

## ✅ Verification Checklist

After opening the application, verify that:

### Visual Check

- [ ] Weekly calendar grid is displayed (7 columns or stacked cards)
- [ ] Time slots show correct times (9am-5pm)
- [ ] Some slots show "Available" badge (green)
- [ ] Some slots show "Booked" badge (red)
- [ ] Header shows "Counselling Booking" title
- [ ] Stats show available and booked counts
- [ ] "Show Available Only" toggle is visible
- [ ] "Confirm Booking" button is present (disabled initially)
- [ ] Theme toggle button (sun/moon icon) is visible

### Interaction Check

- [ ] Click on an available slot → It highlights with blue border
- [ ] Selected slot shows "Selected" badge
- [ ] Stats update to show selected slot details
- [ ] "Confirm Booking" button becomes enabled
- [ ] Clicking another slot → Previous slot deselects
- [ ] Click booked slot → Nothing happens (disabled)

### Booking Flow

- [ ] Select an available slot
- [ ] Click "Confirm Booking" button
- [ ] Modal appears with booking details
- [ ] Enter your name in the input field
- [ ] Click "Confirm Booking" in modal
- [ ] Toast notification appears (top-right)
- [ ] Modal closes
- [ ] Slot now shows as "Booked"
- [ ] Slot is disabled for further selection

### Filter Feature

- [ ] Toggle "Show Available Only" switch
- [ ] Booked slots disappear from view
- [ ] Only available slots are shown
- [ ] Toggle again → All slots reappear

### Dark Mode

- [ ] Click theme toggle button (sun/moon)
- [ ] Background changes to dark
- [ ] Text colors adjust for readability
- [ ] All components maintain contrast
- [ ] Click again → Returns to light mode

### Persistence

- [ ] Book a slot
- [ ] Refresh the page (F5)
- [ ] Booked slot remains booked
- [ ] Data persists across refreshes

### Responsive Design

- [ ] Resize browser window
- [ ] Layout adjusts on smaller screens
- [ ] Mobile view shows stacked cards
- [ ] Desktop view shows grid
- [ ] All features work on mobile

### Animations

- [ ] Page loads with smooth fade-in
- [ ] Slots appear with stagger effect
- [ ] Hover over available slot → Slight scale-up
- [ ] Click slot → Slight scale-down
- [ ] Modal opens with fade and zoom
- [ ] Theme toggle rotates smoothly

---

## 🛠 Additional Commands

### Build for Production

```bash
npm run build
```

Creates an optimized production build in `.next/` directory.

### Start Production Server

```bash
npm start
```

Runs the production build (must run `npm run build` first).

### Run Tests

```bash
npm test
```

Runs the unit test suite with Jest.

### Lint Code

```bash
npm run lint
```

Checks code for linting errors.

---

## 🐛 Troubleshooting

### Issue: "Command not found: npm"

**Solution**: Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: Port 3000 is already in use

**Solution**:

```bash
# Use a different port
npm run dev -- -p 3001
```

Then open `http://localhost:3001`

### Issue: Module not found errors

**Solution**:

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution**:

```bash
# Reinstall TypeScript dependencies
npm install --save-dev typescript @types/react @types/node
```

### Issue: Tailwind styles not loading

**Solution**:

1. Stop the server (Ctrl+C)
2. Delete `.next` folder
3. Restart: `npm run dev`

### Issue: Dark mode not working

**Solution**: Clear browser cache and localStorage:

```javascript
// In browser console (F12)
localStorage.clear();
location.reload();
```

### Issue: Tests failing

**Solution**:

```bash
# Update testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
```

### Issue: Animations not smooth

**Solution**:

- Enable hardware acceleration in browser settings
- Close other resource-intensive applications
- Update graphics drivers

---

## 📂 Project Structure Overview

```
Simple_Booking_Interface/
├── app/                  # Next.js pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── ui/             # Shadcn components
│   └── *.tsx           # Feature components
├── context/            # State management
├── data/               # Booking data
├── types/              # TypeScript types
└── lib/                # Utilities
```

---

## 🎯 Quick Feature Guide

### How to Book a Slot

1. **Select**: Click on any available (green) slot
2. **Confirm**: Click "Confirm Booking" button
3. **Enter Name**: Type your name in the modal
4. **Book**: Click "Confirm Booking" in modal
5. **Done**: See success message and booked slot

### How to Filter Slots

1. **Toggle**: Click the "Show Available Only" switch
2. **View**: See only available slots
3. **Toggle Back**: Click switch again to see all slots

### How to Change Theme

1. **Click**: Click the sun/moon button (top-right)
2. **Switch**: Theme changes instantly
3. **Preference**: Your choice is saved automatically

---

## 📊 Performance Tips

### For Best Performance

- Use latest browser version
- Enable hardware acceleration
- Close unnecessary browser tabs
- Clear cache periodically
- Use good internet connection for first load

### Expected Performance

- **First Load**: < 2 seconds
- **Page Interactions**: Instant
- **Animations**: 60 FPS
- **Booking Confirmation**: < 1 second

---

## 🆘 Need Help?

1. **Check Documentation**:

   - `README.md` - Quick overview
   - `SETUP.md` - Installation details
   - `DOCUMENTATION.md` - Technical details
   - `PROJECT_OVERVIEW.md` - Complete overview

2. **Common Issues**: See troubleshooting section above

3. **Browser Console**: Press F12 to see any error messages

---

## 🎉 Success!

If you've completed all the verification steps, you're all set!

### What You Can Do Now

- ✅ Explore all features
- ✅ Try booking multiple slots
- ✅ Test responsiveness (resize window)
- ✅ Try dark mode
- ✅ Filter available slots
- ✅ Refresh and see persistence
- ✅ Read the code and learn
- ✅ Modify and experiment

### Next Steps

- Review the code in your editor
- Check out the component structure
- Read the documentation files
- Run the tests: `npm test`
- Build for production: `npm run build`

---

**Enjoy using the Simple Booking Interface! 🚀**

---

## 📝 Notes

- All data is stored locally in your browser
- No backend server required
- Works completely offline after first load
- No data is sent to any external server
- Safe to experiment and make changes

---

**Last Updated**: December 31, 2025
