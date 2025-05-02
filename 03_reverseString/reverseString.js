const reverseString = function(givenString) {
    let newString = [];
    stringLen = givenString.length;
    for(let i = stringLen; i >= 0; i--){
        newString[stringLen - i] = givenString.at(i);
    }

    newString = newString.join("")

    return newString;

};

// Do not edit below this line
module.exports = reverseString;
