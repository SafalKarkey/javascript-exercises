const leapYears = function(year) {
    if(year < 0) return "ERROR"; //negative date
    if(Number.isNaN(year)) return "ERROR"; //not a number
    if(!Number.isInteger(year)) return "ERROR"; //floating number

    //leap year:
    //if divisible by 4 AND (if not divisible by 100 OR if divisible by 400)

    if((year%4 === 0) && (year%100 !== 0 || year%400 === 0)){
        return true;
    }
    else{
        return false;
    }


};

// Do not edit below this line
module.exports = leapYears;
