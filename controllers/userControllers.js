const User = require("../models/userModel");

// const home = (req, res) => {
//     res.send("Hello New Pawan Thanay op");
//   };
  

// module.exports = {home}

exports.home = (req, res) => {
    res.send("Hello Pawan OP");
};


exports.createUser = async (req, res) => {
    try {
      const { name, email } = req.body;
      // To check all the details
      if (!name || !email) {
        throw new Error("Name and Email are Required");
      }
      const userExits = await User.findOne({ email });
      if (userExits) {
        throw new Error("Email Already Exists");
      }
      // Inserting into the Database
  
      const user = await User.create({ name, email });
      res.status(201).json({
        success: true,
        message: "User Created Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
    }
};

exports.getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        success: false,
        message: error.message,
      });
    }
};

exports.editUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: "User updated Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        success: false,
        message: error.message,
      });
    }
};
  
exports.deleteUser = async (req, res) => {};

  

