const routerx = require("express-promise-router");
const bookController = require("../controllers/bookController");
const auth = require("../middlewares/auth");
// Instance
const router = routerx();

router.get("/test", bookController.test);
router.get("/list", bookController.list);

module.exports = router;
