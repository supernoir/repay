import app from "./app";
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})

app.get('/', (req:any,res:any) => {
	res.json({
		note: 'Please use the REST API.'
	});
});

app.get('/users', (req,res)=>{
	res.json({
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
