const { register, login } = require("../authcontroller/authcontroller");
const { checkUser } = require("../authmiddleware/authmiddleware");

const router = require("express").Router();

router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);

module.exports = router