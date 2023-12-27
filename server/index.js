const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { connection } = require("./db");
dotenv.config();
const cors = require("cors");
const { userRouter } = require("./routes/user.route");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to BrandWick_app base point")
})

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected DB to Successfully");
    console.log(`Server running on ${process.env.PORT}`);
  } catch (error) {
    console.log("Error while connecting to DB");
    console.log("error:", error);
  }
});
