
const { connect }= require("./client.js");
const { setupInput } = require("./input.js");



console.log("Connecting ...");

// call the connect funciton to connect to server
const conn = connect();
//connect();
setupInput(conn);

