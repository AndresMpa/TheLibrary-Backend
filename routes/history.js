const routerx = require('express-promise-router');
const historyController = require('../controllers/historyController');
const auth = require('../middlewares/auth');
// Instance
const router = routerx();

router.get('/all', historyController.all);
router.get('/cancelled', historyController.cancelled);
router.get('/delivered', historyController.delivered);
router.get('/returned', historyController.returned);
router.get('/reserves', historyController.reserves);
router.post('/add', auth.verifyAdmin, historyController.add);

module.exports = router;
