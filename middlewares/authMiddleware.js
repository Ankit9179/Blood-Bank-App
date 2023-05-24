const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    //get token
    const token = req.headers["authorization"].split(" ")[1];
    //verify token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, dcode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth faild",
        });
      } else {
        req.body.userId = dcode.userId;
        next();
        console.log("token matched");
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Auth faild",
      error,
    });
  }
};
