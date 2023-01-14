// for connecting to the database ie mongodb mongoose is used 
const mongoose =require("mongoose");

mongoose.connect('mongodb://localhost/anyname');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting in db'));
db.once('open',function(){
    console.log('successfully connect to the database')
});