const request = require('request');

const getGeocodeLocation = (address, callback)=> {
    encodedAddress = encodeURIComponent(address);
    
    //console.log(`encoded address: ${encodedAddress}`)
    
    
    // My API Key @:
    // https://console.developers.google.com/google/maps-apis/apis/geocoding-backend.googleapis.com/credentials?project=turnkey-layout-210703&folder&organizationId&duration=PT1H
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBvw13IEhQjd4RNqYsnekiDmpVeaMztSbc`,
        json: true
    }, (error, response, body) => {
    
        //console.log(error)
        //console.log(response.statusCode)
        if(error){
            //console.log(`Unable to get the response due to: ${error}`);
            callback(`Unable to get the response due to: ${error}`)
        }
    
        if(body.status === 'ZERO_RESULTS'){
            // console.log('Not able to locate the address')
            callback('Not able to locate the address');
        }
     if(response.statusCode ==200) {  
        console.log("Address:", JSON.stringify(body.results[0].formatted_address, undefined, 2));
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
        callback(undefined, {
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });

     } else {
         //console.log('Unable to get the response due to:', response.statusMessage)
         callback(`Unable to get the response due to: ${response.statusMessage}`)
     }
    })
}

module.exports = {
    geocode: getGeocodeLocation
};




