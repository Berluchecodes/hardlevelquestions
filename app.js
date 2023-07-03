
// Q1 ratings 🙅🏾‍♂️
function showRating(rating) {
let ratings = ""
for (let i = 0; i < Math.floor(rating); ++i ) {
    ratings += "*"
if ( i !== Math.floor(rating)-1) {
    ratings += " "
}
}
if (!Number.isInteger(rating)) {
    ratings += ` .`
}
return ratings
}

 console.log (showRating(5))


// Q2 sort lowest to highest ✅
function highestToLowest(numbers) {
return numbers.sort ((a ,b) => b - a)
}

console.log (highestToLowest([12,4,6,9,0]))


// Q3 price Higest to lowest ✅
function PriceHighestToLowest(prices) {
    return prices.sort ((a , b) => b.price - a.price)
}

console.log (PriceHighestToLowest ([
    {id: 5, price: 50},
    {id: 5, price: 40},
    {id: 5, price: 500},
]) 
)

