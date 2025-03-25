const express = require("express");
const app = express();
const port = 3000;


function getStockData() {
  return {
    name: "QtechAI",
    symbol: "QTA",
    price: parseFloat((Math.random() * 100).toFixed(2)),
    time: new Date().toLocaleTimeString(),
  };
}


app.get("/api/stock", (req, res) => {
  const stockData = getStockData(); 
  res.json(stockData); 
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
