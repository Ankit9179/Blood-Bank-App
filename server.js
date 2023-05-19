const expess = require("express");

//rest object
const app = expess();

//router
app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello from server",
  });
});

//port
const PORT = 8080;

//listen
app.listen(PORT, () => {
  console.log(`server is running on por${PORT}`);
});
