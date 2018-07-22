// var somePromise = new Promise((resolve, reject) => {
//     // Calling Resolve after 2 sec to simulate asynchronous
//     setTimeout(() => {
//         resolve('Resolve works. Promise is fulfilled');
//         //reject('Unable to fulfill the Promise.')
//     }, 2000);
// });

// somePromise.then((message) => {
//     console.log(`Success: ${message}`);
// }, (errorMessage)=> {
//     console.log(`failed: ${errorMessage}`);
// })





// var anotherAsyncAdd = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//             if (typeof a === 'number' && typeof b === 'number'){
//                 resolve(a + b);
//             } else {
//                 reject('Arguments must be numbers');
//             }
//         }, 2000);
//     });
// }

// anotherAsyncAdd(5, 6).then((response) => {
//     console.log(response);
//     return anotherAsyncAdd(response, 10);
// }, (error) => {
//     console.log(error);
// }).then((response) => {
//     console.log(response);
// }, (errorMessage) => {
//     console.log(error);
// });


// var asyncAdd = (a, b)=> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a === 'number' && typeof b === 'number'){
//                 resolve(a + b);
//             } else {
//                 reject('number cannot be added');
//             }
//         }, 1500);
//     });
// }

// asyncAdd(10, '20').then((response) => {
//     console.log(response);
//     return asyncAdd(response, '10');
// }, (errorMessage) => {
//     console.log(errorMessage);
// }).then((response) => {
//     console.log(response);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });

var multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a * b);
            } else {
                reject('cannot multiply')
            }
        }, 2000);
    });
}

multiply(5, 6).then((response)=> {
    console.log(response)
    return multiply(response, "3")
}).then((response) => {
    console.log(response)
    return multiply(response, '10');
}).then((response) => {
    console.log(response)
})
.catch((errorMessage) => {
    console.log(errorMessage);
});

