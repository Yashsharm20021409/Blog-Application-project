const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10); // genrate salt(random alpha+Numric+specail char  string)
        const hashedPass = await bcrypt.hash(req.body.password, salt);  //mix both
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
            profilePic:req.body.profilePic
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
   
        if(!user){
            return res.status(401).json("Wrong credentials!");
        }

        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!validated) {
            return res.status(401).json("Wrong credentials!");
        }


        // excluding password from user._doc (user model k document me se and res of data get stored in others)
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;