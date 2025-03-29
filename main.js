import express from 'express'
import mongoose from 'mongoose'
import { User } from './models/User.js'
import ejs from 'ejs'
import { GetToken } from './Aurthentication/Token.js'//generate a token and verify it ex='asf521'
const app = express()
app.set('view engine', 'ejs');
app.use(express.json())
const port = 3000
const connect = await mongoose.connect('mongodb://localhost:27017/')//any port which is used by MongoDB
app.use(express.static('views'))
//routes

app.post('/singin/user', async (req, res) => {
  let data = req.body
  console.log(data)
  const user_name = data.userName
  const email = data.email
  const password = data.password
  try {
    console.log("in try")
    const FindUserData = await User.findOne({ userName: user_name, user_email: email })
    if (FindUserData) {
      console.log("User already exists");
      return res.status(400).json({ success: false, message: "User already exists" });

    }
    res.json({ success: true, message: "Singin successful" })

    const verify = new User({ userName: user_name, user_email: email, password: password });
    console.log("verify");
    await verify.save()
    console.log("user added")


  }
  catch (err) {
    console.error(err)
  }
})
app.post('/login/user', async (req, res) => {
  let data = req.body
  console.log(data)

  let verify = await User.findOne({ user_email:data.User_Name_Email, password:data.password })

  try {
    if (verify) {
      console.log("user found")
      res.json({success: true, message: "Login successful"})
    }
    else {
      console.log("else")
      return res.status(400).json({ success: false, message: "User not found" });
    }
  }
  catch(err){
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