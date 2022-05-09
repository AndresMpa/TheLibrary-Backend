const routerx = require('express-promise-router');
const historyController = require('../controllers/historyController');
const auth = require('../middlewares/auth');
// Instance
const router = routerx();

router.get('/test', historyController.test);
router.post('/add',auth.verifyClient, historyController.add);

module.exports = router;
