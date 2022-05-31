function maxProfit(prices) {
  let min = Infinity, diff = 0;
  for(const x of prices) {
    if(x < min) {
      min = x
    }else {
      if(diff < x-min) {diff = x-min}
    }
  }
  return diff;
}

console.assert(maxProfit([7,1,5,3,6,4]) === 5, "example 1")
console.assert(maxProfit([7,6,4,3,1]) === 0, "example 2")