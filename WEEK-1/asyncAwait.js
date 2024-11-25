//Normal syntax
function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        //do some async logic here
        resolve("hi there!")
    });
    return p;
}

function main(){
    kiratsAsyncFunction().then(function(value){
        console.log(value);
    });
}

/*
output:
hi there
 */

/*---------------------------------------------------------------------------------------------- */

//Asyn/await syntax
function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        //do some async logic here
        resolve("hi there!")
    });
    return p;
}

async function main(){
    //no callbacks, no .then syntax
    const value = await kiratsAsyncFunction();
    //if you don't write await what you get is promise itself
    console.log(value);
}

main();

/*
output:
hi there
 */

/*---------------------------------------------------------------------------------------------- */

