const router = require("express").Router();
const User = require("../model/UserModel");

router.post("/create", async (req, res) => {
  const { name, email, age } = req.body;
  const user = new User({ name, email, age });
  const existUser = await User.findOne({ email: email });

  if (existUser) {
    res.json({ message: "User already exist" });
  } else {
    try {
      await user
        .save()
        .then(() =>
          res.status(200).json({ message: "User created successfully" })
        );
    } catch (error) {
      res.status(400).json({ message: "Server Error" });
    }
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ message: "Server Error" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await User.findByIdAndUpdate(id, data, { new: true }).then(
      res.status(200).json({ message: "User update successfully" })
    );
  } catch (error) {
    res.status(400).json({ message: "Server Error" });
  }
});

module.exports = router;
