const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || !(Number.isInteger(num1)) || !(Number.isInteger(num2)) ||  (Number.isNaN(num2)) || (Number.isNaN(num1))){
        return "ERROR";
    }
    let sum = 0;

    if(num1 > num2){
        //swap if greater
        num1 = num1 + num2;
        num2 = num1 - num2;
        num1 = num1 - num2;
    }

    for(let i = num1; i <= num2; i++){
        sum = sum + i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
