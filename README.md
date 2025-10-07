# 🚀 Crypto Price Tracker

Egy reszponzív, akadálymentességre figyelő kriptovaluta dashboard, amely a [CoinGecko API](https://www.coingecko.com/) adataiból építkezve élő árfolyamkártyákat és hét napos grafikonokat jelenít meg. A beépített kereső segítségével bármely elérhető coinra lekérhetők a részletes statisztikák.

## ✨ Fő funkciók
- 📊 **Alapértelmezett árfolyamkártyák** Bitcoinhoz, Ethereumhoz és Dogecoinhoz részletes 24 órás statisztikákkal.
- 🔍 **Keresőmező** CoinGecko kínálatából bármely token azonnali betöltéséhez.
- 📈 **7 napos grafikonok** minden megjelenített coinhoz dinamikus feliratozással és tooltippekkel.
- ♿ **Akadálymentes visszajelzések** `aria-live` státuszokkal a betöltésről és a hibákról.
- 💡 **Reszponzív elrendezés** sötét témával, kártyaszerű megjelenéssel és kontrasztos státusz-színekkel.

## 🧱 Technológiák
- **HTML5** – szerkezet és hozzáférhetőségi metaadatok
- **CSS3 / Flexbox** – kártyák, grafikon panelek és kereső  layoutja
- **Vanilla JavaScript (ES6+)** – adatlekérés, formázás, keresés és grafikon kezelés
- **[CoinGecko API](https://www.coingecko.com/)** – valós idejű piaci és történelmi adatok
- **[Chart.js](https://www.chartjs.org/)** – interaktív vonaldiagramok a 7 napos árfolyamhoz

## 🚀 Használat
1. Klónozd a repót, majd nyisd meg a projektet:
   ```bash
   git clone https://github.com/<felhasznalo-nev>/crypto-price-tracker.git
   cd crypto-price-tracker
   ```
2. Nyisd meg az `index.html` fájlt a böngésződben vagy szolgáld ki egy egyszerű statikus szerverrel.

### Opcionális fejlesztői kiszolgálás
```bash
python3 -m http.server
# vagy
npx serve
```
Ezután látogasd meg a böngészőben a `http://localhost:8000` vagy az eszköz által megadott címet.

## 🧪 Tesztelés
A projekt statikus front-end, ezért nincs külön automatizált teszt. A működés ellenőrzéséhez nyisd meg a böngészőben és ellenőrizd, hogy a kártyák, grafikonok és a keresés is adatot tölt.

## 📦 Következő lépések ötletekhez
- Kedvencek lista vagy több coin egyidejű összehasonlítása.
- Árfolyam értesítések és historikus idősáv állíthatóság.
- PWA támogatás offline fallback megoldásokkal.

Kellemes fejlesztést! 🎉
