//can you call one function inside another function? YES!
//Example:
function square(n){
    return n*n;
}

function sumOfSquare(a, b){
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;
}

console.log(sumOfSquare(1,2))

//callback functions
function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSquare(a, b){
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;
}

function sumOfCubes(a, b){
    const val1 = cube(a);
    const val2 = cube(b);
    return val1 + val2;
}

console.log(sumOfCube(1,2))

//the logic of sumOfCube and sumOfSquare looks very similar.  
//This is violating the dry rule because the code is repeating.
//And this is where callbacks come into picture

function square(n){
    return n*n;
}

function sumOfSquare(a, b, fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

console.log(a, b, square);

//the square function is given as third argument and it called as callback function.
//In javascript the argument can be a string,a number, a boolean or a function in itself.

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSomething(a, b, callback){
    console.log(callback); //can log function also
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2;
}

//passing function as third argument
const ans = sumOfSomething(2, 2, square)
console.log(ans);

//defining the function inside a function
const ans1 = sumOfSomething(2, 2, function(n){ return n*n*n })
console.log(ans1);