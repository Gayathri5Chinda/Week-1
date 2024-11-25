//this is a synchronous function 
//(here only the main javascript thread is busy and it cannot do any other tasks)
function findSum(n){
    let ans = 0;
    for(let i = 0; i < n; i++){
        ans += i;
    }
    return ans;
}


//let's introduce an asynchronous function (setTimeout)
function findSum(n){
    let ans = 0;
    for(let i = 0; i < n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100, 1000)
console.log("hello world");

/*output:
hello world
4950
*/
/*--------------------------------------------------------------*/

//making the above code synchronous
function findSum(n){
    let ans = 0;
    for(let i = 0; i < n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

//busy waiting
function syncSleep(){
    let a = 1;
    for(let i = 0; i < 10000000000; i++){
        a++;
    }
}

syncSleep();
findSumTill100();
console.log("hello world");

/*
output:
4950
hello world
*/
/*--------------------------------------------------------------*/

//async function to read file
const fs = require("fs");
//filesystem module

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("hi there");

/*
output:
hi there
this is a file
*/
/*--------------------------------------------------------------*/

//to understand flow of code
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("hi there");
let a = 0;
//takes very long, longer than the file read
for(let i = 0; i < 1000000; i++){
    a++;
}
console.log("hi there 2");

/*
output:
hi there
hi there 2
this is a file
*/
/*--------------------------------------------------------------*/
//latentflip.com
/*--------------------------------------------------------------*/

//example of asynchronous function
console.log("hi there");

setTimeout(function(){
    console.log("from inside async fn 2000")
}, 2000);

setTimeout(function(){
    console.log("from inside async fun 1000")
}, 1000);

let a1 = 0;
for(let i = 0; i < 10; i++){
    a1 = a1 + 1;
}
console.log(a1)

/*
output:
hi there
10
from inside async fun 1000
from inside async fn 2000 
*/