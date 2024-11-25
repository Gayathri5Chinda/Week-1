//ugly way to write asynchronous function of our own
const fs = require('fs');

//my own synchronous function
function syncReadFile(cb){
    fs.readFile("a.txt", "utf-8", function(err, data){
        cb(data);
    });
}

//callback function to call
function onDone(data){
    console.log(data)
}

syncReadFile(onDone)

/*
output:
this is a file 
*/

/*---------------------------------------------------------------------------------------------- */

//cleaner way(promises)
const fs = require('fs');

//my own asynchronous function
function syncReadFile(cb){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
        resolve(data);
    });
    })
}

//callback function to call
function onDone(data){
    console.log(data)
}

syncReadFile().then(onDone);

/*
output:
this is a file 
*/

/*---------------------------------------------------------------------------------------------- */

//3 states of promise -> pending, resolve, rejected
var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("food");
    }, 1000)
});

function callback(){
    console.log(d);
}

console.log(d);
d.then(callback)

/*
output:
Promise { <pending> }
Promise { 'food' } 
*/

/*---------------------------------------------------------------------------------------------- */

//here's a promise that immediately get resolve
let p = new Promise(function(resolve){
    resolve("hi there");
});

p.then(function(){  // .then gets called whenever the async function resolves
    console.log(p);
})

/*
output:
Promise{ 'hi there' } 
*/

/*---------------------------------------------------------------------------------------------- */

//Dummy async function that almost immediately resolves
function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}

const value = kiratsAsyncFunction();
value.then(function(data){
    console.log(data); //actually logging the data with what the function above resolved with
})

/*
output:
hi there
 */

