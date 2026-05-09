# Every Memory Begins With You 🌸

A cinematic, emotional Mother's Day memory web app.
Warm · Personal · Elegant · Timeless.

---

## Quick Start

```bash
# 1. Navigate to the project folder
cd every-memory

# 2. Install dependencies
npm install

# 3. Start the local dev server
npm run dev

# 4. Open in your browser
# http://localhost:5173
```

That's it. No backend, no database, no auth.

---

## Project Structure

```
every-memory/
├── public/
│   ├── music/
│   │   └── ambient.mp3          ← Place your music file here
│   └── assets/
│       ├── 2007-2009/
│       │   ├── photo1.jpg       ← Replace with real photos
│       │   ├── photo2.jpg
│       │   └── photo3.jpg
│       ├── 2010-2012/
│       ├── 2013-2017/
│       ├── 2018-2021/
│       ├── 2022-2024/
│       └── 2025-2026/
│
├── src/
│   ├── content/
│   │   └── timeline.json        ← ★ Edit ALL content here ★
│   ├── components/
│   │   ├── OpeningScreen.jsx
│   │   ├── FloatingParticles.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── Timeline.jsx
│   │   ├── TimelineSection.jsx
│   │   ├── MemoryCard.jsx
│   │   ├── MemoryModal.jsx
│   │   ├── MusicPlayer.jsx
│   │   └── EndingSection.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## ★ How to Edit Content (No Code Required)

### 1. Edit text, quotes, and captions
Open `src/content/timeline.json` and change any text field:
- `title` — the chapter title (e.g. "Your Little Baby")
- `quote` — the italic quote at the top of each section
- `subtitle` — the smaller line below the title
- `memories[].caption` — the small label on a card
- `memories[].text` — the emotional paragraph shown in the modal
- `meta.endingMessage` — the final big emotional quote
- `meta.endingSubtext` — the smaller line below it

### 2. Add your photos
Drop photo files into the matching `public/assets/<year>/` folder.

Then in `timeline.json`, update the `src` field for each memory:
```json
{
  "src": "/assets/2007-2009/photo1.jpg"
}
```

Photos will be displayed automatically. If a photo is missing,
a warm placeholder gradient will show instead — the app still looks beautiful.

### 3. Add a video
Set `"type": "video"` and point `src` to a `.mp4` or `.webm` file:
```json
{
  "type": "video",
  "src": "/assets/2018-2021/video1.mp4",
  "caption": "That summer"
}
```

### 4. Add background music
Place any `.mp3` file at:
```
public/music/ambient.mp3
```
Recommended: a soft piano piece, 3–5 minutes, that loops smoothly.
The app plays it at low volume automatically when entering the timeline.
The mute/unmute button is in the top-right corner.

### 5. Add profile photos
Uncomment and update `avatarSrc` in `OpeningScreen.jsx`:
```jsx
<ProfileCard
  name="Mom"
  avatarSrc="/assets/profiles/mom.jpg"
  ...
/>
```

---

## Placeholder Gradients

When a photo hasn't been added yet, each card shows a warm gradient.
You can customize these per memory in `timeline.json`:
```json
"placeholderGradient": "linear-gradient(135deg, #FCE8EF 0%, #FFE8DA 100%)"
```

---

## Build for Sharing

```bash
npm run build
```

This creates a `dist/` folder. You can:
- Open it locally via `npm run preview`
- Deploy it to any static host (Netlify, Vercel, GitHub Pages)
- Copy it to a USB drive and open it on any computer

---

## Font Credits
- **Playfair Display** — headings & cinematic titles (Google Fonts)
- **Lora** — body text & quotes (Google Fonts)
- **Cormorant Garamond** — fine details & labels (Google Fonts)

---

*Made with love. For her.*
