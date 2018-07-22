const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
    address: {
        demand: true,
        alias: 'a',
        describe: 'address to get the geolocation',
        string: true
    }
})
.help().alias('help', 'h').argv


var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBvw13IEhQjd4RNqYsnekiDmpVeaMztSbc`;

axios.get(geocodeURL).then((response) => {

    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find address');
    }

    console.log(response.data)
    var body = response.data;
    var latitude = body.results[0].geometry.location.lat;
    var longitude = body.results[0].geometry.location.lng;
    var formatted_address = body.results[0].formatted_address;

    return axios.get(`https://api.darksky.net/forecast/032dc478221984a42344282bb5dcaef2/${latitude},${longitude}`);

}).then((response) => {

    var data = response.data;
    console.log('=================Temperatute Summary=============');
    console.log(`Summary: ${data.currently.summary}`)
    console.log(`Temperature is: ${data.currently.temperature}`)
    console.log(`Feels like: ${data.currently.apparentTemperature}`)
    console.log(`Humidity: ${data.currently.humidity * 100} %`)
    console.log(`Pressure: ${data.currently.pressure}`)
    console.log(`Wind Speed: ${data.currently.windSpeed}`)
    console.log(`UV-Index: ${data.currently.uvIndex}`)
    console.log(`Visibility: ${data.currently.visibility}`)
    console.log(`Ozone: ${data.currently.ozone}`)
    console.log('=================Temperatute Summary Ends=============')
}).catch(error => {
    if(error.code === 'ENOTFOUND'){
        console.log('Unable to connect')
    } else {
        console.log(error.message)
    }
});

