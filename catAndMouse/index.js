// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true

function catAndMouse(x, y, z) {
    let result = "";
    if( Math.abs(x-z) === Math.abs(y-z)){
        result = "Mouse C"
    } else if(Math.abs(x-z)<Math.abs(y-z)) {
     result = "Cat A" 
    }
    else if(Math.abs(x-z)>Math.abs(y-z)) {
     result = "Cat B" 
    }
return result;
}

// annother way that from discussion 

function catAndMouse(x, y, z) {
    return Math.abs(x-z) === Math.abs(y-z) ? "Mouse C" : Math.abs(x-z) <  Math.abs(y-z) ? "Cat A" : "Cat B"
}