const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and console.log it for the player
  conn.on("data", (data) => {
    console.log(data);
  });

  // print it once conncet successfully
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  // send user's name to server upon connection
  conn.on("connect", () => {
    conn.write("Name: WL");
  })




  return conn;


};

module.exports = {
  connect
}