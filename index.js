const express        = require('express')
var nodejsWeatherApp = require('nodejs-weather-app');
const app            = express()
const port           = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Welcome to the Weather Assistant!')
})

app.get('/weather', (req, res) => {
    if (req.query.city === undefined) {
        throw new Error("Error: use city as query string")
    } else {
        nodejsWeatherApp.getWeather(req.query.city).then(weather => {
            if (weather === undefined) {
                throw new Error(`City ${req.query.city} not found!`)
            }

            res.json({
                city: weather.name,
                temp: weather.main.temp 
            })
        });
    }
})

app.get('/health', (req, res) => {
    res.send('Ok')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
