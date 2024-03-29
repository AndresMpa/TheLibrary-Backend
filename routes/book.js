const routerx = require("express-promise-router");
const bookController = require("../controllers/bookController");
// Instance
const router = routerx();

router.get("/top", bookController.top);
router.get("/list", bookController.list);
router.post("/add", bookController.addBook);
router.post("/remove", bookController.remove);
router.get("/raw-list", bookController.rawList);
router.post("/one-book", bookController.getABook);
router.post("/search", bookController.searchBook);

module.exports = router;
