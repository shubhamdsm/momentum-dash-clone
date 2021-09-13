const API_KEY = 'zbkD-3Jt4yjUouvEtUCmzuC1NwgKboOBwDnv99wf96k';

// calling the unsplash api
// fetch(`https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=${API_KEY}`)
// .then(res => res.json())
// .then(data => {
//     document.body.style.backgroundImage = `url(${data.urls.full})`
// })
// .catch(error => {
//     console.log('error -----> ',error)
// })

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

