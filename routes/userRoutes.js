const express = require("express");
const router = express.Router();
const { home, createUser } = require("../controllers/userControllers");

// router.get("/", (req, res) => {
//     res.send("Hello New Pawan Thanay");
// });

router.get("/", home);
router.post("/createUser", createUser);

module.exports = router;
