const API_KEY = 'zbkD-3Jt4yjUouvEtUCmzuC1NwgKboOBwDnv99wf96k';
const APP_ID = '05c51a69e8891e5ccfa12f1c32542837'

// calling the unsplash api
fetch(`https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=${API_KEY}`)
.then(res => res.json())
.then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
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

navigator.geolocation.getCurrentPosition(position =>  {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${APP_ID}`)
   .then(res => res.json())
   .then(data => {
       console.log(data)
       const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
       document.getElementById('icon').innerHTML = `
       <img src=${icon} alt='icon'/>`
       document.getElementById('temp').innerHTML = `
       <h1>${data.main.temp}</h1>
       `
       document.getElementById('city').innerHTML = `
       <h1>${data.name}</h1>
       `

   })
   .catch(err => console.log(err))
    
});
