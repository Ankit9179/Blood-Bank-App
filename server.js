const expess = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/DB");

//config .env file
dotenv.config();

//mongo db connection :- mongodb config must be below dotenv config
connectDB();

//rest object
const app = expess();

//middlewares
app.use(expess.json()); /// now you can handel jason data with the help of this command
app.use(cors());
app.use(morgan("dev")); //you can see you req  and res behaviour

//router
//testing route
app.use("/api/v1/test", require("./routes/testRout"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `server is running on por ${PORT} in ${process.env.DEV_MODE} mode`.bgGreen
      .white
  );
});
