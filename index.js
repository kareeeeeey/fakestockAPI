import { getStockData } from "./fakestockapi";

setInterval (function() {
    const stockData = getStockData()
    renderStockTicker(stockData)

},1500)

let prevPrice = null

function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    const { name, symbol, price, time} = stockData

    stockDisplayName.textContent = name
    stockDisplaySymbol.textContent = symbol
    stockDisplayPrice.textContent = price
    stockDisplayTime.textContent = time
}

