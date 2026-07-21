import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
    name: { type: String, required: true, trim:true }, // User name, not email address!
    email: { type: String, required: true, trim:true, unique: true },
    password: { type: String, minlength: 6, required: true, trim: true}, //we need to hash the password using bycrypt (1st : npm install bycrypt)
    isAdmin: {type: Boolean, default: false},
},
{timestamps: true }
);


//User create hunu bhanda aagadi nai hash hunu paryo so we use 'Pre' function given by moongoose
userSchema.pre("save", async function(){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
});

//creating user here
const User = mongoose.model('UserModel',userSchema,'userTable'); // mongoose.model(modelName, ourSchema, collectionAkaTableName') //this made the table

export default User;