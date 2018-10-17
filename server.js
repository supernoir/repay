const express = require('express');
const server = new express();
const port = process.env.PORT || 8081;

server.get('/', async(req,res) => {
	await res.json({
		data: 'Hello World'
	});
});

server.get('/users', async(req,res)=>{
	await res.json({
		users: [
			{ id      : 1,
				name    : 'Socrates',
				score   : 1.5,
				balance : 22.26,
				currency: 'USD',
				history : [{
					date       : '2018-10-22',
					transaction: -10.5
				}]
			},
			{ id      : 2,
				name    : 'Plato',
				score   : 1.7,
				balance : 1210.03,
				currency: 'NIS',
				history : [{
					date       : '2012-02-01',
					transaction: 120.67
				}]
			},
		]
	});
});



server.listen(port);
console.log(`Server listening on port ${port}`);