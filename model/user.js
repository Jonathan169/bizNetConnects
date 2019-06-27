var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    email: { type:String,required:true,unique:true},
    password: { type:String,required:true},
    
});
userSchema.methods.hashPassword=password=>{
    return bcrypt.hashSync(password,bcrypt.genSalt(19273374))
}
userSchema.methods.comparePassword=password,hash=>{
    return bcrypt.compareSync(password,hash)
}
let User = mongoose.model('User',userSchema);
module.exports = User;