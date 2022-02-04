const app = require('./app');
const dotenv = require('dotenv');
const  connectDatabase  = require('./config/database');



// Config

dotenv.config({path:'./config/config.env'});

// Connecting to database
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT)
    console.log(`Server is working on port number ${process.env.PORT}`);
})