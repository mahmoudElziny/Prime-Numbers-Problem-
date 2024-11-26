


function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

function getPrimeNumbers(a,b){
    let result = [];
    let min;
    let max;

    if(a < b){
        min = a;
        max = b;
    }else if(a > b){
        min = b;
        max = a;
    }else {
        return -1;
    }
    
    for(let i = min +1; i < max; i++){
        if(isPrime(i)){
            result.push(i);
        }
    }
    
    return result;
}

console.log(getPrimeNumbers(10,10));
console.log(getPrimeNumbers(1,10));
console.log(getPrimeNumbers(10,1));
console.log(getPrimeNumbers(100,1));




