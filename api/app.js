const port = process.env.PORT || 5000;
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
	console.log( req.body );
	console.log( req.body.name );
	res.send();
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
