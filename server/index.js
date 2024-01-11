const express = require("express");
const app = express();
const port = 3000;
const weatherRoute = require("./routes/Weather");
const userRoute = require("./routes/User");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/weather", weatherRoute);
app.use("/user", userRoute);
mongoose.connect(
  "mongodb+srv://user_1:user123@cluster0.cidqadh.mongodb.net/courses",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
