const { MOVE_UP_KEY, MOVE_RIGHT_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, SETENCODING } = require('./constants');

let connection;

const setupInput = function(conn) {
	connection = conn;
	const stdin = process.stdin;
	
	stdin.setRawMode(true);
	stdin.setEncoding(SETENCODING);
	stdin.resume();
	
	stdin.on('data', (key) => {
		switch(key) {
			case '\u0003':
				process.exit();
				break;
			case MOVE_UP_KEY:
				conn.write('Move: up');
				break;
			case MOVE_RIGHT_KEY:
				conn.write('Move: right');
				break;
			case MOVE_DOWN_KEY:
				conn.write('Move: down');
				break;
			case MOVE_LEFT_KEY:
				conn.write('Move: left');
				break;
			case 'c':
				conn.write("Say: Caia is a snake");
				break;
		}
	});
	return stdin;
}

module.exports = setupInput
