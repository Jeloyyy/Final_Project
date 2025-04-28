const express = require("express");
const {addUser,viewUsers, viewUser, deleteUser, updateUser, loginUser} = require("./userController");

const router = express.Router();

router.post("/adduser",addUser);
router.get("/viewusers",viewUsers);
router.get("/viewuser/:SID",viewUser);
router.delete("/deleteuser/:SID",deleteUser);
router.put("/updateuser/:SID",updateUser);
router.post("/login",loginUser);

module.exports= router;