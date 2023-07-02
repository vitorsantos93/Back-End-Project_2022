const express = require("express");

//Servidor
const app = express();
const port = 8000;
app.use(express.json());

const usersRouter = require("./routes/usersRouter.js");
const districtRouter = require("./routes/districtRouter.js");
const countyRouter = require("./routes/countyRouter.js");
const parishRouter = require("./routes/parishRouter.js"); 

// Rotas
app.use("/users", usersRouter);
app.use("/districts", districtRouter);
app.use("/counties", countyRouter);
app.use("/parishes", parishRouter); 

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
})