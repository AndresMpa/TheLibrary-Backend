const routerx = require("express-promise-router");
const newsController = require("../controllers/newsController");
// Instance
const router = routerx();

router.get("/list", newsController.list);
router.post("/add", newsController.add);

module.exports = router;
