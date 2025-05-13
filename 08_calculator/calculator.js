const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
  net = 0;
  arr.forEach(element => {
    net += element
  });
	
  return net;
};

const multiply = function(arr) {
  net = 1;
  arr.forEach(element => {
    net *= element
  });
	
  return net;
};

const power = function(n1, n2) {
	return n1**n2;
};

const factorial = function(num) {
	if(num <= 1) return 1;
  return num*factorial(num - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
