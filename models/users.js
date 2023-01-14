//we will crete schema and for it we require mongoose
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email: {
        type: String,
        required : true,
        unique: true
    },
    password:{
        type: String,
        required:true
    
    },
    name:{
        type: String,
        required:true

    }
    //we will also store created at and updated at from now on which is done by mongoose like this
},{
    timestamps:true
});
const User=mongoose.model('User',userSchema);
module.exports=User;