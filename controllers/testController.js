const testController = (req, res) => {
  res.status(200).send({
    success: true,
    message: "test rout",
  });
};

module.exports = { testController };
