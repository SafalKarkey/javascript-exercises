const removeFromArray = function(arr, ...removeValues) {
    newarr = [];
    arrLen = arr.length;
    
    for(let i = 0; i < arrLen; i++){
        let flag = 0;
        for(const removeValue of removeValues){
            if(removeValue === arr[i]){
                flag = 1;
            }
        }
        if(flag === 0){
            newarr.push(arr[i]);
        }
    }
    return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;
