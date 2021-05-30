const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("got the user");
        //resolve({user: "Coy"});
        reject(new Error('User Not Logged In'));
    },2000);
});

promise.then(user => {
    console.log(user);
})
.catch(errorMessage =>{
    console.log(errorMessage.message);
    console.log(errorMessage)}
    );