
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // call the callback if receive input from keyboard
  stdin.on("data", handleUserInput);

  return stdin;
};

// the "data" callback handler
const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
};


module.exports = {
  setupInput
};