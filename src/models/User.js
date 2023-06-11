const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: {
        type:String,
        // validator: function(value) {
        //     return this.repeatPassword === value;
        // },
        // message: 'Incorrect password!'
    },
});

userSchema.virtual('repeatPassword')
    .set(function(value){
        if(value !== this.password) {
            throw new mongoose.MongooseError('Password missmatch!');
        }
    })

const User = mongoose.model('User', userSchema);

module.exports = User;