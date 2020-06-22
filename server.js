const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect("mongodb://localhost:27017/prefeitura-informa", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir("./models");

const Notification = mongoose.model("Notification");
const User = mongoose.model("User");

//rota
app.use("/", require("./routes"));

app.listen(3000, () => {
    console.log('Connected to 3000');
});
