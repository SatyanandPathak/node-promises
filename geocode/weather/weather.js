const request = require('request');


var getWeather = (latitude, longitude, callback) => {

    request({
        url: `https://api.darksky.net/forecast/032dc478221984a42344282bb5dcaef2/${latitude},${longitude}`,
        json: true
    }, (error, response, body) =>{
        if (error){
            callback(error)
        }
        else if(response.statusCode == 200){







            callback(undefined, body)
        } else {
            callback(undefined, response)
        }
    })
}


var formatWeatherResponse = (response) => {

    console.log(`Summary: ${response.currently.summary}`)
    console.log(`Temperature is: ${response.currently.temperature}`)
    console.log(`Feels like: ${response.currently.apparentTemperature}`)
    console.log(`Humidity: ${response.currently.humidity * 100} %`)
    console.log(`Pressure: ${response.currently.pressure}`)
    console.log(`Wind Speed: ${response.currently.windSpeed}`)
    console.log(`UV-Index: ${response.currently.uvIndex}`)
    console.log(`Visibility: ${response.currently.visibility}`)
    console.log(`Ozone: ${response.currently.ozone}`)

}

module.exports = {
    getWeather
}

