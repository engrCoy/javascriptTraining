//sync code
/*
    This depicts that JS performs the code line by line.
*/
// function funcName() {
//     console.log("we are in a function");
//     console.log("do some stuff");
// }

// console.log("Start");
// funcName();
// console.log("End");

// async function

//testing setTimeout() function
// console.log("Start");
// setTimeout(() => {
//     console.log('We are in a timeout')
// },2000);
// console.log("End");

// testing forEach() function

// console.log("Start");
// const items = [1,2,3,4,5]
// items.forEach(itemVal => {
//     console.log(itemVal);
// });


//sync vs. async
console.log("Start");

//this is the callback version of the asynchronous function
/*function loginUser(email,password, callback) {
    setTimeout(() => {
        console.log("Now we have the Data");
        callback({userEmail: email, userPass: password});
    }, 2000)
}

function getUserVid(email,callback){
    setTimeout(() => {
        callback(['vidOne','vidTwo','vidThree']);
    },1000);
}
function vidDetails(video, callback) {
    setTimeout(() => {
        callback("this is the vid title");
    },1000);
}
const user = loginUser('something@coymail.com',12345, user => {
    console.log(user);
    getUserVid(user.userEmail, videos => {
        console.log(videos);
        vidDetails(videos[0], title => {
            console.log(title); 
        });
    });
    
}); */

//although this nested callback is called callback hell which is composed of multiple nested functions;


//this is the promise version of the asynchronous function

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data");
            reject({userEmail: email});
        },5000)
    }); 
}

function getUserVid(email) {
     return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(['videoOne','videoTwo','videoThree']);
        },2000);
     })
}

function vidDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(video);
            resolve("Title of the video");
        },1000);
    })
}

//Async version of scripting it
// loginUser('coy@gmail.com',1234)
// .then(user => getUserVid(user.userEmail))
// .then(videos => vidDetails(videos[0]))
// .then(details => console.log(details));



// console.log("Finish")

// const yt = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("getting some videos from youtube");
//         resolve({videos: [1,2,3,4,5]});
//     },2000)
// })

// const fb = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("fb stuff");
//         resolve({user: 'coy'});
//     },5000);
// })

// Promise.all([yt,fb])
// .then(result => console.log(result));

async function displayUser() {
    try {
        const loggedUser = await loginUser('coyster',12312);
        const videos = await getUserVid(loggedUser.userEmail);
        const detail = await vidDetails(videos[0]);
        console.log(detail);
    } catch {
        console.log("We can't get the information ")
    }
    
}
displayUser();