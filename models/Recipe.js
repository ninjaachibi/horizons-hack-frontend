import mongoose from 'mongoose'

var Schema = mongoose.Schema

var userSchema = new Schema(
  {
    username:{type:String,required:true},
      password:{type:String,required:true},
      calories:{type:Number,required:false},
      meals:{type:Array, required:false},
      dailyMeal: {type:Array,required:false},
      age:{type:Number,required:false}

  }
)
var User = mongoose.model('User',userSchema)
export default {User: User.mongoose.model}
