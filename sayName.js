const sayName = () => {
  console.log("Smriti Aryal");
};

const sayAddress = () => {
  console.log("Kathmandu");
};

// single function
// module.exports = sayName;

// multiple functions
module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;
