const routerx = require("express-promise-router");
const bookController = require("../controllers/bookController");
const auth = require("../middlewares/auth");
// Instance
const router = routerx();

router.get("/top", bookController.top);
router.get("/list", bookController.list);
router.delete("/remove", bookController.remove);
router.get("/raw-list", bookController.rawList);
router.post("/one-book", bookController.getABook);
router.post("/search", bookController.searchBook);

module.exports = router;
