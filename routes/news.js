const routerx = require('express-promise-router');
const newsController = require('../controllers/newsController');
const auth = require('../middlewares/auth');
// Instance
const router = routerx();

router.get('/test', newsController.test);
router.post('/add',auth.verifyAdmin, newsController.add);

module.exports = router;
