var getUser = (id, callback) => {
    var user = {
        name: 'Satya',
        id: id
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
   
}

getUser(31, (userObject) => {
    console.log(userObject);
});