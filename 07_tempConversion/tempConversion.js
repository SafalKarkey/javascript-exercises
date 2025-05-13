const convertToCelsius = function(fahrenheit) {
  celcius = (fahrenheit - 32)*(5/9);
  //round off
  celcius = Math.round(celcius*10)/10;
  return celcius;
};

const convertToFahrenheit = function(celcius) {
  fahrenheit = (celcius*(9/5) + 32)
  fahrenheit = Math.round(fahrenheit*10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
