import { getStockData } from "./fakeStockAPI";

// setInterval (function() {
//     const stockData = getStockData()
//     renderStockTicker(stockData)

// },1500)
setInterval(async function () {
  const stockData = await getStockData();
  renderStockTicker(stockData);
}, 1500);

let prevPrice = null

function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    const { name, symbol, price, time} = stockData

    stockDisplayName.innerText= name
    stockDisplaySymbol.innerText = symbol
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = time
}

