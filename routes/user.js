const routerx = require("express-promise-router");
const userController = require("../controllers/userController");
// Instance
const router = routerx();

router.post("/signin", userController.signin);
router.post("/create", userController.createAccount);
router.post("/update", userController.updateAccount);
router.post("/user-info", userController.userInformation);

module.exports = router;
