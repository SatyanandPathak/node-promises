const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./geocode/weather/weather');

const yargsArgs = yargs.options({
    address: {
        demand: true,
        alias: 'a',
        describe: 'address to fetch the weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

appArguments = yargsArgs._[0]

address = yargsArgs.a

var location = geocode.geocode(address, (error, response) => {

    if(error) {
        console.log(error)
    } else {
        console.log('==============', response)
        console.log("-------------------------", response.latitude)


        weather.getWeather(response.latitude, response.longitude, (error, response)=> {
            console.log(`Summary: ${response.currently.summary}`)
            console.log(`Temperature is: ${response.currently.temperature}`)
            console.log(`Feels like: ${response.currently.apparentTemperature}`)
            console.log(`Humidity: ${response.currently.humidity * 100} %`)
            console.log(`Pressure: ${response.currently.pressure}`)
            console.log(`Wind Speed: ${response.currently.windSpeed}`)
            console.log(`UV-Index: ${response.currently.uvIndex}`)
            console.log(`Visibility: ${response.currently.visibility}`)
            console.log(`Ozone: ${response.currently.ozone}`)

        })

    }
});




