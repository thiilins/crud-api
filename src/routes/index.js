const route = require("color-convert/route");
const express = require("express");
const router = express.Router();
const MainController = require("../controller/MainController");
router.get("/", MainController.index);
router.get("/user/:id?", MainController.findUser);
router.post("/user", MainController.registerNewUser);
router.delete("/user/:id", MainController.deleteUser);
router.put("/user/:id", MainController.updateUser);

module.exports = router;
