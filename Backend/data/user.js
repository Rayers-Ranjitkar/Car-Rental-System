import mongoose from "mongoose";
import bycrypt from 'bcrypt';

const userSchema = mongoose.Schema({
    name: { type: String, required: true, trim:true }, // User name, not email address!
    email: { type: String, required: true, trim:true, unique: true },
    password: { tupe: String, minimum: 6, reqiured: true, trim: true}, //we need to hash the password using bycrypt (1st : npm install bycrypt)
    isAdmin: {type: Boolean, default: false},
},
{timestamps: true }
);

const user = moongose.model('UserModel',userSchema,'userTable'); // mongoose.model(modelName, ourSchema, collectionAkaTableName')

//User create hunu bhanda aagadi nai hash hunu paryo so we use 'Pre' function given by moongoose
user.pre('save', ()=>{
    if(this.modified('password') ){
        this.password = bcrypt.hashSync(this.password, 10); //this is 10 times hashing
    }
})

export default user;