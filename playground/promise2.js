const request = require('request');

var geocode = (address) => {
    var encodedAddress = encodeURIComponent(address)
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBvw13IEhQjd4RNqYsnekiDmpVeaMztSbc`,
            json: true
        }, (error, response, body) => {
            if (error){
                reject(error);
            } else if(response.statusCode != 200){
                reject(response.statusMessage)
            } else{
                if (body.status === 'ZERO_RESULTS'){
                    reject('Address details could not be obtained')
                }
                resolve(body)
            }
        });
    });
}

geocode('satyanand').then((response) => {
    console.log(JSON.stringify(response, undefined, 2))
}).catch((error) => {
    console.log("Obtaiee error", error)
});