const express = require('express');
const app = express();
const port = 3000;

// Your function to get stock data
function getStockData() {
  return {
    name: "QtechAI", 
    symbol: "QTA", 
    price: parseFloat((Math.random() * 100).toFixed(2)), 
    time: new Date().toLocaleTimeString(),
  };
}

// Endpoint to get stock data
app.get('/api/stock', (req, res) => {
  const stockData = getStockData();  // Call the function to get stock data
  res.json(stockData);  // Send the stock data as a JSON response
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
