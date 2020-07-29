const setupInput = function() {
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding('utf8');
	stdin.resume();
	
  
	stdin.on('data', (key) => {
		if (key === '\u0003') {
			console.log("exit");
			process.exit();
		}
	});
	
  
	return stdin;
}
// const handleUserInput = function (data,) {

// };



module.exports = setupInput