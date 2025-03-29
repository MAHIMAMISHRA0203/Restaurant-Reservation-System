import mongoose from "mongoose";
import  validator from  "validator";

const reservationSchema=new mongoose.Schema({
    firstName:{
        type:String ,
        required:true,
        miniLength:[3,"First name must contain  atleast 3 characters "],
         maxLength:[30,"First name cannot exceed 30 characters "],
    },
      lastName:{
        type:String ,
        required:true,
        miniLength:[3,"First name must contain  atleast 3 characters "],
         maxLength:[30,"First name cannot exceed 30 characters "],
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email"],
    },
    phone:{
        type: String,
        required:true,
          miniLength:[10," phone number must contain 10 digits "],
         maxLength:[10,"phone number must contain 10 digits  "],
    },
   

    date:{
        type:String ,
        required:true ,
        },
         time:{
        type:String ,
        required:true ,
        },
   

})



export const Reservation=mongoose.model("Reservation",reservationSchema)