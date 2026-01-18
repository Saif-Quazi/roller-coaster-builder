# 3D Roller Coaster Builder

An interactive 3D roller coaster builder built with React, Three.js, and Vite. Design and ride your own roller coasters with loops, hills, and realistic wood supports.

## Live Demo

https://Saif-Quazi.github.io/roller-coaster-builder/

## Features

- Interactive track building with drag-and-drop control points
- Create loops and hills with adjustable control points
- Build mode and ride mode cameras
- Realistic wood support structures with cross-bracing
- Night/day cycle with dynamic lighting
- Smooth coaster car animation
- Save and export roller coaster designs as JSON files

## Local Development

```bash
npm install
npm run dev
```

The app will be available at http://localhost:5000

## Controls

- **Click** on the ground to add track points
- **Drag** points to reshape the track
- **Click** a point to add loops or delete points
- **Ride** button to experience your coaster
- **Export** to save your design as a JSON file

## Built With

- React & React Three Fiber
- Three.js (3D graphics)
- Vite (build tool)
- Tailwind CSS
- Zustand (state management)

## Technical Improvements

### Security Fixes
Fixed 17 npm package vulnerabilities (2 low, 8 moderate, 7 high severity):
- Updated `react-router-dom`, `express`, and `glob` to patch security issues
- Upgraded `vite` from v5 to v6 for esbuild security patches
- Upgraded `drizzle-kit` to latest version
- Added npm overrides to force secure esbuild version (^0.25.0)

**Result:** All packages pass `npm audit` with 0 vulnerabilities

### Additional Improvements
- Fixed missing favicon display
- Ensured cross-platform compatibility (Windows, macOS, Linux)
- Cleaned up unnecessary files and improved .gitignore

## Assignment Requirements

- ✅ GitHub account and repository forked
- ✅ Closed loop track design
- ✅ Sufficient initial drop for perpetual motion
- ✅ Two loops implemented
- ✅ Two hills implemented
- ✅ Night music customized
- ✅ Day music customized
- ✅ Pertinent modifications implemented

**Submission:** Export your roller coaster to create a `.json` file. Submit this file along with your GitHub Pages URL.
