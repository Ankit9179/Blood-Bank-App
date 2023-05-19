const expess = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");

//config .env file
dotenv.config();

//rest object
const app = expess();

//middlewares
app.use(expess.json()); /// now you can handel jason data with the help of this command
app.use(cors());
app.use(morgan("dev")); //you can see you req  and res behaviour

//router
app.use("/api/v1/test", require("./routes/testRout"));

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `server is running on por ${PORT} in ${process.env.DEV_MODE} mode`.bgGreen
      .white
  );
});
