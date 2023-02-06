const express = require("express");
const router = express.Router();
const { 
    home, 
    createUser,
    getUsers,
    editUser,
    deleteUser,

 } = require("../controllers/userControllers");

// router.get("/", (req, res) => {
//     res.send("Hello New Pawan Thanay");
// });

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.put("/edituser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);
module.exports = router;
