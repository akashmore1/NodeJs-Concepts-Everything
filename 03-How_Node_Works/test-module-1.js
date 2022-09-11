class Calculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}

module.exports = Calculator;

// We can directly assign values to exports object
exports.say = () => {
  console.log("Hello World");
};
