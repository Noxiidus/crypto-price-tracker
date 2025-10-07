# 🚀 Crypto Price Tracker

A simple **real-time cryptocurrency price tracker** built with **HTML, CSS, and JavaScript**, using the [CoinGecko API](https://www.coingecko.com/).

## ✨ Features
- 📊 Live prices for **Bitcoin, Ethereum, and Dogecoin**
- 📈 7-day Bitcoin price chart (powered by Chart.js)
- 🔴 24h percentage change with green/red indicator
- ⚡ Responsive design with a modern dark theme
- 🌍 Deployable on GitHub Pages in seconds

## 🔧 Technologies Used
- **HTML5** for structure  
- **CSS3** (Flexbox + responsive design) for styling  
- **JavaScript (ES6+)** for API calls and dynamic rendering  
- **[CoinGecko API](https://www.coingecko.com/)** for real-time crypto data  
- **[Chart.js](https://www.chartjs.org/)** for interactive charts  
A responsive, accessibility-minded cryptocurrency dashboard that consumes the [CoinGecko API](https://www.coingecko.com/) to display live market cards and seven day charts. The built-in search experience lets you retrieve rich stats for any coin available through the API alongside the default dashboard widgets.

## 🚀 Getting Started
## ✨ Highlights
- 📊 **Default price cards** for Bitcoin, Ethereum, and Dogecoin with 24h high/low, volume, and market cap snapshots.
- 🔍 **Global search bar** that validates queries, reports friendly feedback, and renders any requested coin with the same card + chart flow.
- 📈 **7-day sparkline charts** with dynamic headings, tooltips, and automatic chart teardown to keep renders accurate.
- ♿ **Accessible status messaging** using `aria-live` regions and busy indicators for loading and failure states.
- 🧠 **Shared data utilities** for formatting currencies, mapping API responses, and gracefully handling fetch errors.
- 💡 **Responsive layout** with dark theme styling, card-style surfaces, and clear color cues for status states.

## 🧱 Tech Stack
- **HTML5** – semantic structure and accessibility metadata.
- **CSS3 / Flexbox** – layout for cards, chart panels, and the search interface.
- **Vanilla JavaScript (ES6+)** – data fetching, formatting, search handling, and Chart.js orchestration.
- **[CoinGecko API](https://www.coingecko.com/)** – real-time market and historical pricing data.
- **[Chart.js](https://www.chartjs.org/)** – interactive line charts for the 7-day history.

1. Clone this repository:
## 🚀 Getting Started
1. Clone the repository and move into the project folder:
   ```bash
   git clone https://github.com/<your-username>/crypto-price-tracker.git
   cd crypto-price-tracker
   ```
2. Open `index.html` directly in your browser or serve the project with a lightweight static server.

### Optional local server
```bash
python3 -m http.server
# or
npx serve
```
Then visit `http://localhost:8000` (or the port reported by your server) in the browser.

## 🧭 Usage Tips
- Use the search bar to look up any coin slug supported by CoinGecko (e.g., `solana`, `cardano`).
- Loading and error states announce themselves via accessible status banners and visually distinct styling.
- The dashboard reuses a shared rendering flow, so new coins automatically receive synchronized cards and charts.

## 🧪 Testing
This project is a static front-end without automated tests. To verify behavior, open it in your browser and confirm that cards, charts, and search results populate as expected.

## 📦 Future Enhancements
- Favorite lists or side-by-side comparison of multiple coins.
- Price alerts and adjustable historical time ranges.
- PWA support with offline fallbacks.

Happy tracking! 🎉
