//  import { getStockData } from "./fakeStockAPI";

//  setInterval (function() {
//    const stockData = getStockData()
//    renderStockTicker(stockData)
//  },1500)

//  let prevPrice = null

// function renderStockTicker(stockData) {
//     const stockDisplayName = document.getElementById('name')
//     const stockDisplaySymbol = document.getElementById('symbol')
//     const stockDisplayPrice = document.getElementById('price')
//    const stockDisplayPriceIcon = document.getElementById('price-icon')
//    const stockDisplayTime = document.getElementById('time')

//    const { name, symbol, price, time} = stockData

//    stockDisplayName.innerText= name
//    stockDisplaySymbol.innerText = symbol
//   stockDisplayPrice.innerText = price
//   stockDisplayTime.innerText = time
//  }


//  import { getStockData } from "./fakeStockAPI";

//  let prevPrice = null;

//  setInterval(function () {
//    const stockData = getStockData();
//    renderStockTicker(stockData);
//  }, 1500);

//  function renderStockTicker(stockData) {
//    const stockDisplayName = document.getElementById("name");
//    const stockDisplaySymbol = document.getElementById("symbol");
//    const stockDisplayPrice = document.getElementById("price");
//    const stockDisplayPriceIcon = document.getElementById("price-icon");
//    const stockDisplayTime = document.getElementById("time");

//    const { name, symbol, price, time } = stockData;

    
//    stockDisplayName.innerText = name;
//    stockDisplaySymbol.innerText = symbol;
//    stockDisplayPrice.innerText = `$${price}`;
//    stockDisplayTime.innerText = time;

// //   // Compare current price with previous price to determine price change
//   if (prevPrice !== null) {
//     if (price > prevPrice) {
//      // Price has gone up
//        stockDisplayPriceIcon.innerText = "▲"; // or use an icon
//        stockDisplayPriceIcon.style.color = "green";
//      } else if (price < prevPrice) {
//        // Price has gone down
//        stockDisplayPriceIcon.innerText = "▼"; // or use an icon
//       stockDisplayPriceIcon.style.color = "red";
//     } else {
//       // No change in price
// /   stockDisplayPriceIcon.innerText = ""; // No 
//     }
//   }

// // / Update previous price for the next comparison
//   prevPrice = price;
//  }





// Assuming getStockData is a function that returns fake stock data
// import { getStockData } from "./fakeStockAPI";

// let prevPrice = null;
// let intervalId = null; // To keep track of the interval for updating stock prices

// // Function to start/stop the stock updates
// function toggleStockUpdates() {
//   const button = document.getElementById("start-stop-btn");

//   if (intervalId === null) {
//     // Start stock updates
//     intervalId = setInterval(function () {
//       const stockData = getStockData();
//       renderStockTicker(stockData);
//     }, 1500);

//     button.innerText = "Stop Updates"; // Update button text
//   } else {
//     // Stop stock updates
//     clearInterval(intervalId);
//     intervalId = null;
//     button.innerText = "Start Updates"; // Update button text
//   }
// }

// // Function to render the stock data
// function renderStockTicker(stockData) {
//   const stockDisplayName = document.getElementById("name");
//   const stockDisplaySymbol = document.getElementById("symbol");
//   const stockDisplayPrice = document.getElementById("price");
//   const stockDisplayPriceIcon = document.getElementById("price-icon");
//   const stockDisplayTime = document.getElementById("time");

//   const { name, symbol, price, time } = stockData;

//   stockDisplayName.innerText = name;
//   stockDisplaySymbol.innerText = symbol;
//   stockDisplayPrice.innerText = `$${price}`;
//   stockDisplayTime.innerText = time;

//   // Price change indicators
//   if (prevPrice !== null) {
//     if (price > prevPrice) {
//       stockDisplayPriceIcon.innerText = "▲";
//       stockDisplayPriceIcon.classList.add("price-up");
//       stockDisplayPriceIcon.classList.remove("price-down");
//     } else if (price < prevPrice) {
//       stockDisplayPriceIcon.innerText = "▼";
//       stockDisplayPriceIcon.classList.add("price-down");
//       stockDisplayPriceIcon.classList.remove("price-up");
//     } else {
//       stockDisplayPriceIcon.innerText = ""; // No change
//     }
//   }

//   // Update previous price for next comparison
//   prevPrice = price;
// }

// // Event listener for the stock selection dropdown
// const stockSelect = document.getElementById("stock-select");
// stockSelect.addEventListener("change", function () {
//   prevPrice = null; // Reset previous price when switching stocks
//   clearInterval(intervalId); // Stop any ongoing stock updates
//   intervalId = null; // Reset interval ID
//   toggleStockUpdates(); // Restart stock updates for the new selection
// });

// // Event listener for the start/stop button
// const startStopButton = document.getElementById("start-stop-btn");
// startStopButton.addEventListener("click", toggleStockUpdates);

// // Initial call to start the updates when page loads
// toggleStockUpdates();



import { getStockData } from "./fakeStockAPI";

// Initialize previous price
let prevPrice = null;

// Function to fetch and render stock data
function renderStockTicker() {
  const stockData = getStockData();
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayPriceIcon = document.getElementById("price-icon");
  const stockDisplayTime = document.getElementById("time");

  const { name, symbol, price, time } = stockData;

  stockDisplayName.innerText = name;
  stockDisplaySymbol.innerText = symbol;
  stockDisplayPrice.innerText = `$${price}`; // Ensure price has a $ sign
  stockDisplayTime.innerText = time;

  // Compare current price with previous price to determine price change
  if (prevPrice !== null) {
    if (price > prevPrice) {
      // Price has gone up
      stockDisplayPriceIcon.innerText = "▲"; // Up arrow
      stockDisplayPriceIcon.style.color = "green";
    } else if (price < prevPrice) {
      // Price has gone down
      stockDisplayPriceIcon.innerText = "▼"; // Down arrow
      stockDisplayPriceIcon.style.color = "red";
    } else {
      // No change in price
      stockDisplayPriceIcon.innerText = ""; // Clear icon
    }
  }

  // Update previous price for the next comparison
  prevPrice = price;
}

// Set interval to update stock data every 1500ms
setInterval(renderStockTicker, 1500);