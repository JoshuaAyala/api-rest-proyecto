const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/crud");

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);

// routes
app.get("/", (req, res) => {
  res.send("mi api xd");
});

//login 

app.post("/api/login", (req , res) => {
  const user = {
      id: 1,
      nombre : "joshua",
      email: "josh@email.com",
      rol: "Asistente Técnico",
      sucursal: "Alameda"
  }

  res.send(signinHandler);

});



mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a BD"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("Servidor en puerto", port));
