const routerx = require("express-promise-router");
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");
// Instance
const router = routerx();

router.post("/signin", userController.signin);
router.post("/createAccount", userController.createAccount);

module.exports = router;
