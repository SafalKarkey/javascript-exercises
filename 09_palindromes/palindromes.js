const palindromes = function (str) {
    const punctuations = [',', '.', '!', '?', ' '];

    //convert to array for easy filtering of punctuations
    cleanArray = str.toLowerCase().split("")
                .filter(key => {
                    if(!punctuations.includes(key)) return key;
                });
    
    const strLen = cleanArray.length;

    isPalindrome = true;
    for(let i = 0; i<strLen; i++){
        if(cleanArray.at(i) !== cleanArray.at(strLen-i -1)){
            isPalindrome = false;
        }
    }
    return isPalindrome;

    //can use .join() to reconstruct string from array
    //can create reverse string using .reverse()
    //return reverse === original
};

// Do not edit below this line
module.exports = palindromes;
