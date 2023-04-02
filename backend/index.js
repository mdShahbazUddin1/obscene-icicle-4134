const express = require("express");
require("dotenv").config();
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { tyreRoute } = require("./routes/tyre.route");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors())
app.use("/user", userRouter);
app.use("/tyre",tyreRoute)

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {}
  console.log("server is runnig");
});
