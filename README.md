# 3D Roller Coaster Builder

> **Live Demo:** https://Saif-Quazi.github.io/roller-coaster-builder/

An interactive 3D roller coaster builder built with React, Three.js, and Vite. Design and ride your own roller coasters with loops, hills, and realistic wood supports.

---

## 🚀 AI-Assisted Improvements

### Security Enhancements
- ✅ **Fixed 17 npm vulnerabilities** (2 low, 8 moderate, 7 high)
- ✅ **Upgraded packages:** vite v5→v6, react-router-dom, express, drizzle-kit
- ✅ **Result:** 0 vulnerabilities (verified with `npm audit`)

### New Features
- 🎥 **Auto-rotating camera** - Toggle button for 360° track showcase
- 🖼️ **Favicon** - Added browser tab icon
- 📷 **Camera reset fix** - Properly resets position/rotation when exiting ride mode

### Code Cleanup
- 🗑️ Removed build artifacts (`client/test-dist/`, 35 files)
- 🗑️ Removed temporary files (`.replit`, unused mp3s)
- ✨ Improved `.gitignore` for cleaner repository
- ✅ Ensured cross-platform compatibility (Windows/macOS/Linux)

---

## 🎮 Features

- Interactive track building with drag-and-drop control points
- Create loops and hills with adjustable control points
- Build mode and ride mode cameras with **auto-rotate option**
- Realistic wood support structures with cross-bracing
- Night/day cycle with dynamic lighting
- Smooth coaster car animation
- Save and export roller coaster designs as JSON files

---

## 🎯 Controls

| Action | Description |
|--------|-------------|
| **Click ground** | Add track points |
| **Drag points** | Reshape the track |
| **Click point** | Add loops or delete points |
| **🔄 Rotate button** | Auto-rotate camera (360° view) |
| **🎢 Ride button** | Experience your coaster |
| **💾 Export** | Save design as JSON file |

---

## 🛠️ Local Development

```bash
npm install
npm run dev
```

The app will be available at http://localhost:5000

---

## 📚 Built With

- React & React Three Fiber
- Three.js (3D graphics)
- Vite (build tool)
- Tailwind CSS
- Zustand (state management)

---

## ✅ Assignment Requirements

| Requirement | Status |
|-------------|--------|
| GitHub account and repository forked | ✅ |
| Closed loop track design | ✅ |
| Sufficient initial drop for perpetual motion | ✅ |
| Two loops implemented | ✅ |
| Two hills implemented | ✅ |
| Night music customized | ✅ |
| Day music customized | ✅ |
| AI-assisted modifications | ✅ |

**Submission:** Export your roller coaster to create a `.json` file. Submit this file along with your GitHub Pages URL.
