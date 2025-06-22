const router = require("express").Router();
const User = require("../model/UserModel");

router.post("/create", async (req, res) => {
  const { name, email, age } = req.body;
  const user = new User({ name, email, age });
  try {
    await user
      .save()
      .then(() =>
        res.status(200).json({ message: "User created successfully" })
      );
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
