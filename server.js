const app = require('./app');
const connect = require('./db/db');

app.listen(process.env.PORT,async()=>{
    console.log("Connecting to DB")
    try{
    const resp=await connect()
    console.log("Connected")
    }
    catch(e)
    {   
        console.error(e);
    }
});