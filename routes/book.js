const routerx = require("express-promise-router");
const bookController = require("../controllers/bookController");
const auth = require("../middlewares/auth");
// Instance
const router = routerx();

router.get("/top", bookController.top);
router.get("/list", bookController.list);
router.post("/one-book", bookController.getABook);

module.exports = router;
