const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

//EJS
app.use(expresslayouts);
app.use('view engine', 'ejs');

//Body Parser
app.use(express.urlencoded({ extended: false }));

//db config
const db = require('./Config/keys').MongoURI;

mongoose.connect(db, { useNewUrlParser: true })
	.then(() => console.log('db connected'))
	.catch(err => console.log(err));


const app = express();

const PORT = process.env.PORT || 5000; 

//Routes 
app.use('/', require('./Routes/index'));
app.use('/user', require('./Routes/user'));

app.listen(PORT, console.log(`Server started on port ${PORT}`)); 


