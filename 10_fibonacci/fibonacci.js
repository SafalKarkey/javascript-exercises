const fibonacci = function(fibIndex) {
    if(typeof fibIndex === 'string') {
        fibIndex = parseInt(fibIndex);
    }
    // fibIndex = Number(fibIndex); //or parseInt
    if(fibIndex < 0) return "OOPS";
    if(fibIndex === 0) return 0;
    if(fibIndex === 1 || fibIndex === 2) return 1;

    return fibonacci(fibIndex - 1) + fibonacci(fibIndex - 2);

};

// Do not edit below this line
module.exports = fibonacci;
