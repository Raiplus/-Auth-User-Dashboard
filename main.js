import express from 'express'
import mongoose from 'mongoose'
import { User } from './models/User.js'
import ejs from 'ejs'
import bcrypt from 'bcrypt'

import dotenv from 'dotenv';

dotenv.config();





const saltRounds = 10;
const app = express()
app.set('view engine', 'ejs');
app.use(express.json())
const port = 3000
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.use(express.static('views'))
//routes

app.post('/singin/user', async (req, res) => {
  let data = req.body
  
  const user_name = data.userName
  const email = data.email
  const password = data.password
  try {
  
    const FindUserData = await User.findOne({ userName: user_name, user_email: email })
    if (FindUserData) {
      console.log("User already exists");
      return res.status(400).json({ success: false, message: "User already exists" });

    }
    else {
      bcrypt.genSalt(saltRounds, async function (err, salt) {
        const verify = new User({ userName: user_name, user_email: email, password: password });

        bcrypt.hash(verify.password, salt, async function (err, hash) {
          console.log("verify");
         
          verify.password = hash
          await verify.save()
          console.log("user added")
          res.json({ success: true, message: "Singin successful" })

          // Store hash in your password DB.
        });
      });



    }




  }
  catch (err) {
    console.error(err)
  }
})
app.post('/login/user', async (req, res) => {
  let data = req.body
 

  try {
    let verify = await User.findOne({ user_email: data.User_Name_Email })
    
     if (!verify) {
    return res.status(400).json({ success: false, message: "User not found" });
  }
     let isMatch=await bcrypt.compare(data.password, verify.password)

      if(isMatch){
      console.log("user found")
      res.json({ success: true, message: "Login successful" })
      return}
      else{
        
    return res.status(401).json({ success: false, message: "Incorrect password" });

      }
   

    

  }
  catch (err) {
    console.error(err)

  }
})

app.get("/UserDashbord", (req, res) => {
  console.log("finally")
  res.render("UserDashbord"); // Ensure this matches the actual EJS/Pug file
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})