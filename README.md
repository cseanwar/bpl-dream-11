# 🏏 BPL Dream 11 — Fantasy Cricket Team Selector

**BPL Dream 11** is an interactive fantasy cricket web application inspired by the Bangladesh Premier League (BPL). Users build their dream cricket team by selecting players from a roster, managing a coin-based budget, and tracking their squad — all in real time with a clean, responsive React UI.

---

## 🌐 Live URL

🔗 [https://bpl-dream-11-by-react.netlify.app](https://bpl-dream-11-by-react.netlify.app)

---

## 🎯 Purpose

BPL Dream 11 is built for cricket fans who want to experience the thrill of fantasy team management. The app lets users:

- Browse a roster of BPL cricket players with detailed stats and profiles
- Select up to 6 players for their dream team within a coin budget
- Remove or swap players to refine their squad
- Earn free coins via a claim button to unlock more selections
- Get instant feedback through toast notifications on every action

The project demonstrates core React concepts including component architecture, props, state management with `useState`, conditional rendering, and local data handling.

---

## ✨ Key Features

- 🧑‍🤝‍🧑 **Player Roster** — Browse all available BPL players with name, role, country, and price stats
- ➕ **Player Selection** — Add players to your dream team with a single click
- 🪙 **Coin Budget System** — Each player has a coin cost; you can only buy players you can afford
- 🎁 **Claim Free Coins** — Earn extra coins via a claim button to expand your buying power
- ❌ **Remove Players** — Remove any selected player from your team to free up budget
- 🚫 **Duplicate Prevention** — Validation prevents adding the same player twice
- 👥 **6-Player Limit** — Squad capped at 6 players, with clear feedback when the limit is reached
- 🔔 **Toast Notifications** — Real-time alerts for successful picks, errors, and budget warnings using `react-toastify`
- 🔀 **Tab Toggle** — Switch between the Available Players list and your Selected Squad seamlessly
- 📱 **Fully Responsive** — Pixel-perfect layout across mobile, tablet, and desktop

---

## 🛠️ NPM Packages Used

### Core Framework

| Package | Purpose |
|---|---|
| `react` | UI component library |
| `react-dom` | React DOM rendering |

### Build Tool

| Package | Purpose |
|---|---|
| `vite` | Lightning-fast dev server and build tool |
| `@vitejs/plugin-react` | Vite plugin for React JSX support |

### Notifications

| Package | Purpose |
|---|---|
| `react-toastify` | Animated toast notifications for player selections, errors, and budget alerts |

### Styling

| Package | Purpose |
|---|---|
| `tailwindcss` | Utility-first CSS framework for responsive UI |
| `postcss` | CSS transformation tooling (required by Tailwind) |
| `autoprefixer` | Adds vendor prefixes to CSS for cross-browser compatibility |

### Developer Tools

| Package | Purpose |
|---|---|
| `eslint` | JavaScript/JSX linting |
| `eslint-plugin-react` | React-specific ESLint rules |
| `eslint-plugin-react-hooks` | Linting rules for React Hooks |

---

## 📁 Project Structure

```
bpl-dream-11/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # Player images and static assets
│   ├── components/
│   │   ├── Banner/          # Hero banner with claim coins button
│   │   ├── PlayerCard/      # Individual player card with stats & add button
│   │   ├── PlayerList/      # Available players grid with tab toggle
│   │   ├── SelectedPlayer/  # Selected squad list with remove button
│   │   ├── Navbar/          # Top nav with coin balance display
│   │   └── Footer/          # Site footer
│   ├── data/
│   │   └── players.json     # Local player data (name, role, country, price, image)
│   ├── App.jsx              # Root component — state management & logic
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles + Tailwind directives
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🎮 How It Works

1. **Start with a coin balance** displayed in the navbar
2. **Browse players** in the Available Players tab — each card shows role, country, and coin cost
3. **Click "Choose Player"** to add them to your squad (deducted from coin balance)
4. **Claim free coins** via the banner button to top up your balance
5. **Switch to "Selected"** tab to review your team
6. **Remove a player** from your squad to get their coins refunded
7. Toast notifications confirm every action — success, duplicate, budget error, or squad full

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
# Clone the repository
git clone https://github.com/cseanwar/bpl-dream-11.git
cd bpl-dream-11

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🌍 Deployment

Deployed on **Netlify** with:

- Automatic deployments triggered on push to `main`
- Vite production build (`dist/` folder) served as a static site

---

## 👤 Author

**Anwar Hossain**
- GitHub: [@cseanwar](https://github.com/cseanwar)
- LinkedIn: [anwar-hossain-a3095147](https://www.linkedin.com/in/anwar-hossain-a3095147)
- Twitter/X: [@cseanwar](https://x.com/cseanwar)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).