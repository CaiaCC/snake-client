const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
		host:'135.23.222.131',
		port: 50541
	});
	conn.setEncoding('utf8'); 
	
	conn.on('connect', () => {
			console.log("Successfully connected to game server")
			conn.write("Name: CCC");
		});	

	conn.on('data', (data) => {
		console.log('Server says: ', data)
	});
	
	// conn.on('connect', () => {
	// 	conn.write('Move: up');
	// });
	
  return conn;
}

module.exports = connect
