const bcrypt=require('bcrypt')
const mongoose=require('mongoose')

const UserSchema= new mongoose.Schema({
    userName :{
        type:String,
        required:[true,'The Username is required']
    },
    email:{
        type:String,
        required:[true,'The Email is required'],
        validate:{
            validator:val=> /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: 'Unvalid email, check your input'
        }
    },
    password:{
        type:String,
        required:[true,'The password is required']
    }
},{timeStamps:true})

    UserSchema.virtual('confirmPassword')
        .get(()=>this._confirmPassword)
        .set(val=>this._confirmPassword=val)
    UserSchema.pre('validate',function(next){
        console.log('validation hook');
        if(this.password!==this.confirmPassword||this.password==""){
            this.invalidate('confirmPassword',"Passwords must match")
        }
        next()
    })
    UserSchema.pre('save', async function(next){
        console.log("Pre Save Hook");
        try{
            const hashedPassword = await bcrypt.hash(this.password,10)
            this.password = hashedPassword;
            console.log("Hashed Password  == "+ hashedPassword);
        }catch (error){
            console.log(error);
        }
        next();
    })
    const User=mongoose.model('user',UserSchema)

    module.exports=User