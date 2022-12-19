const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 8080;
const app = express();

dotenv.config();

//Enable body Parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/openai', require('./routes/openaiRoutes'));

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port , ()=> {
    console.log(`Server is running on ${port}`);
}); 

