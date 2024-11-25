//concatination
const initial = [1, 2, 3];
const secondary = [4, 5, 6];

console.log(initial.concat(secondary));
console.log(initial);

//how much type function took to run
function calculateSum() {
    let a = 0;
    for(let i = 0; i < 100000; i++) {
        a = a + i 
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs)

//create a stopwatch or counter
function currentTimePrint(){
    console.log(new Date().getTime());
}

setInterval(currentTimePrint, 1000);