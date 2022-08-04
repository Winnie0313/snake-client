
// setup interface to handle user input from stdin


// Stores the active TCP connection object.

let connection;



const setupInput = function (conn) {
  connection = conn;

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
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  }
};


module.exports = {
  setupInput
};