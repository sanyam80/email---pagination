const app = require("./index.js");
const connect = require("./config/db.js")
app.listen(5000, async function(){
    try{
    await connect();
    console.log("listening on port 5000")}
    catch(err){
        console.log("something went wrong")
    }
});