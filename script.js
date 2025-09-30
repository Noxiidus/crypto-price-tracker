const apiURL = "https://api.coingecko.com/api/v3";

// fetch coin data
async function getCoinData(id, elementId) {
  const res = await fetch(`${apiURL}/coins/markets?vs_currency=usd&ids=${id}`);
  const data = await res.json();
  const coin = data[0];

  document.getElementById(elementId).innerHTML = `
    <img src="${coin.image}" alt="${coin.name}">
    <h3>${coin.name}</h3>
    <p>💲 ${coin.current_price.toLocaleString()} USD</p>
    <p>24h: <span style="color:${coin.price_change_percentage_24h > 0 ? "lime" : "red"}">
      ${coin.price_change_percentage_24h.toFixed(2)}%
    </span></p>
  `;
}

// render chart
async function renderChart() {
  const res = await fetch(`${apiURL}/coins/bitcoin/market_chart?vs_currency=usd&days=7`);
  const data = await res.json();

  const labels = data.prices.map(p => new Date(p[0]).toLocaleDateString());
  const prices = data.prices.map(p => p[1]);

  new Chart(document.getElementById("priceChart"), {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "BTC Price (USD)",
        data: prices,
        borderColor: "lime",
        backgroundColor: "rgba(0,255,0,0.1)",
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { display: false }
      }
    }
  });
}

// run
getCoinData("bitcoin", "btc");
getCoinData("ethereum", "eth");
getCoinData("dogecoin", "doge");
renderChart();
