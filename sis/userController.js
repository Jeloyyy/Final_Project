const db = require("./db");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
//=======================================
exports.loginUser=(req, res) => {
    const {Username, Password} =req.body;

    db.query("select * from Students where Username=?", [Username], async (err, results) => {
        if(err) return res.status(500).json({ message: err.message });
        if(results.length===0) return res.status(401).json({ message: "Invalid credentials"});

        const user = results[0];
        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials"});

        const token = jwt.sign({ StudentID: user.StudentID}, process.env.JWT_SECRET, { expiresIn: "0005"});

        res.status(200).json({ message: "Login Successful", token})
    });
}

//=======================================
exports.addUser = async (req,res) => {
    const {Fullname, Email, Username, Password} = req.body;

    const hashedPassword = await bcrypt.hash(Password,10);

    db.query("Insert into students(Fullname, Email, Username, Password) values (?,?,?,?)", [Fullname, Email, Username, hashedPassword],
        (err) => {
            if(err) return res.status(500).json({message: err.message});
            res.status(200).json({message: "User added sucessfully"});

})};
//=======================================
exports.viewUsers = (req,res) =>{
    const sql = "SELECT StudentID, Fullname, Email, Username, Password from Students";

    db.query(sql, (err, results) => {
        if(err) return res.status(500).json({message: err.message});
        res.status(200).json(results);
    })
}
//=======================================
exports.viewUser = (req,res) =>{
    const {SID} = req.params;
    console.log(SID);

    const sql = "SELECT StudentID, Fullname, Email, Username from Students where StudentID = ?";

    db.query(sql, [SID], (err, results) => {
        if(err) return res.status(500).json({message: err.message});
        if(results.length === 0) return res.status(404).json({message: "Walang Ganyan Dito!"});

        res.status(200).json(results[0]);
    })
}
//=======================================
exports.deleteUser = (req,res) =>{
    const {SID} = req.params;
    console.log(SID);

    const sql = "DELETE from Students where StudentID = ?";

    db.query(sql, [SID], (err, results) => {
        if(err) return res.status(500).json({message: err.message});
        if(results.affectedRows === 0) return res.status(404).json({message: "Walang Ganyan Dito!"});

        res.status(200).json({message: "Okay na Wala na siya hehe mwa!"});
    })
}
//=======================================
exports.updateUser = async(req, res) => {
    const {SID} = req.params;
    const {Fullname, Username, Email, Password} = req.body;
    const hashedPassword = Password? await bcrypt.hash(Password,10): null;

    db.query("Update Students Set Fullname=?, Email=?, Username=?, Password=COALESCE(?,Password) where StudentID=?", 
        [Fullname, Email, Username, hashedPassword, SID],
        (err)=>{
            if(err) return res.status(500).json({message: err.message});
            res.status(200).json({message: "User updated successfully"})
        });
}
//=======================================