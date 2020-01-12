const router = require('express').Router();

const apiSelectlangController = require('../controller/langSelect/LangSelectController');
const { requireSignin, isAuth, isAdmin } = require("../controller/auth/auth");

router.post("/select-lang", requireSignin,apiSelectlangController.LangSelect);

module.exports = router;

