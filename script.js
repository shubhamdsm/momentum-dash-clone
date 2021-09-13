const API_KEY = 'zbkD-3Jt4yjUouvEtUCmzuC1NwgKboOBwDnv99wf96k';
const APP_ID = '05c51a69e8891e5ccfa12f1c32542837'


fetch(`https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=${API_KEY}`)
.then(res => res.json())
.then(data => {
    console.log(data)
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById('author').textContent = `Shot By: ${data.user.name}`
})
.catch(error => {
    console.log('error -----> ',error)
})

fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`)
.then(res => res.json())
.then(data => {
    document.getElementById('bitcoin-name').innerHTML = `
    <img src = ${data.image.small} alt = 'bitcoin'/>
    <h1>${data.name}</h1>
    
    `
    document.getElementById('bitcoin-price').innerHTML = `
    <p>  Current Price: &#8377; ${data.market_data.current_price.inr} </p>
    <p> High: &#8377; ${data.market_data.high_24h.inr} </p>
    <p> Low: &#8377; ${data.market_data.low_24h.inr} </p>
    `
})
.catch(error => {
    console.log('error -----> ',error)
})

navigator.geolocation.getCurrentPosition(position =>  {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${APP_ID}`)
   .then(res => res.json())
   .then(data => {
       console.log(data)
       const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
       document.getElementById('icon').innerHTML = `
       <img src=${icon} alt='icon'/>`
       document.getElementById('temp').innerHTML = `
       <h1>${Math.round(data.main.temp)} &#176;C</h1>
       `
       document.getElementById('city').innerHTML = `
       <h1>${data.name}</h1>
       `

   })
   .catch(error => {
    console.log('error -----> ',error)
})
    
});

function getTime(){
let date = new Date()
document.getElementById('time').innerHTML = date.toLocaleTimeString('en-IN',{timeStyle:'short'})}

setInterval(getTime,1000)