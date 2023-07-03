
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

// promises Practice .then/ async/await/ creating a promise 

const emailRef = document.querySelector(".email")

// 1) .then
fetch ("https://jsonplaceholder.typicode.com/users/1")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
    emailRef.innerHTML = data.email
})

// 2) async/await
async function main() {
  const response = await fetch ("https://jsonplaceholder.typicode.com/users/1")
  const data = await response.json()
  console.log (data)
  emailRef.innerHTML = data.email
}

main()

// 3) create a promise and calling using .then and async/await

const statusRef = document.querySelector('.status')
const videoRef = document.querySelector ('.video')
function getSubscriptionStatus () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            
        }, 2000)
       
    })
}

// // // 1) .then
getSubscriptionStatus().then(response => console.log(response))

console.log(getSubscriptionStatus())

// // 2) async/await
async function main(status){
    console.log(await getSubscriptionStatus())
    statusRef.innerHTML = status
    
}
 main("VIP")

function getVideo (subscriptionStatus) {
    return new Promise((resolve, reject) => {
      if (subscriptionStatus === "VIP") {
        resolve("show Video")
    }
      else if (subscriptionStatus === "free") {
        resolve("show trailer")
      }
      else {
        reject ("no video")
      }
    })
}

async function main(){
   const status = await getSubscriptionStatus()
    statusRef.innerHTML = status 
    try {
        console.log(await getVideo(status))
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML= e
    }
}

// Q3 first 6 incomplete todos
async function firstSixComplete (userId) {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/todos")
    
    const result = await promise.json()

    const incompleteTask = result.filter(elem => !elem.completed).slice(0, 6)
    
    console.log (incompleteTask)


}

firstSixComplete (6)
