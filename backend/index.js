const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/",(req,res) => {
  res.send("backend working properly 🚀")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
  
});