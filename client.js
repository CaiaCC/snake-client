const net = require('net');
const { IP, PORT, PLAYERNAME, SETENCODING } = require('./constants');


const connect = function() {
  const conn = net.createConnection({ 
		host: IP,
		port: PORT
	});
	conn.setEncoding(SETENCODING); 
	
	conn.on('connect', () => {
			console.log("Successfully connected to game server")
			conn.write(PLAYERNAME);
		});	

	conn.on('connect', (data) => {
		console.log('Server says: ', data)
	});

  return conn;
}

module.exports = connect
