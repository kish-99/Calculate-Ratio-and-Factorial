const ratio = require("../ratio/index");
const factorial = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratio(num1, num2);
  const factorial = factorial(num3);
  return { ratio: ratio, factorial: factorial };
};

module.exports = ratioAndFactorial;
