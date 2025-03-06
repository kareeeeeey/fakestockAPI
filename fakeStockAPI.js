export function getStockData() {
    return{
      name: 'QtechAI',
      Symbol: 'QTA',
      price: (Math.random()*3).toFixed(2),
      time: new Date().toLocaleTimeString(),
    }
}

