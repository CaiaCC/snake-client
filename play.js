const net = require('net');
// const stdin = require('process');
// stdin.setEncoding('utf-8');

const connect = function() {
  const conn = net.createConnection({ 
		host:'135.23.222.131',
		port: 50541
	});
	conn.setEncoding('utf8'); 

	conn.on('data', (data) => {
		console.log('Server says: ', data);
	});

  conn.on('connect', () => {
	  conn.write('La La La LHL Life');
	
	});
	
  return conn;
}

console.log('Connecting ...');
connect();



