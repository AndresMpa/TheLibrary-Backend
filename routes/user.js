const routerx = require("express-promise-router");
const userController = require("../controllers/userController");
// Instance
const router = routerx();

router.post("/signin", userController.signin);
router.post("/create", userController.createAccount);

module.exports = router;
