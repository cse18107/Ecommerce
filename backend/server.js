const app = require('./app');
const dotenv = require('dotenv');
const  connectDatabase  = require('./config/database');



// Handling Uncaught Exception
process.on("uncaughtException",(error) =>{
    console.log('Error:'+error.message);
    console.log(`Shutting down the server due to  Uncaught Exception`);
    process.exit(1);
})


// Config

dotenv.config({path:'./config/config.env'});

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT)
    console.log(`Server is working on port number ${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection",error=>{
    console.log(`Error: ${error.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    });
});
