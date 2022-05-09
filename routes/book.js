const routerx = require('express-promise-router');
const bookController = require('../controllers/bookController');
const auth = require('../middlewares/auth');
// Instance
const router = routerx();

router.get('/test', bookController.test);
router.get('/list', bookController.list);
router.post('/add',auth.verifyAdmin, bookController.add);
router.get('/query',auth.verifyAdmin, bookController.query);
router.put('/update',auth.verifyAdmin, bookController.update);
router.delete('/remove',auth.verifyAdmin, bookController.remove);
router.put('/activate',auth.verifyAdmin, bookController.activate);
router.put('/deactivate',auth.verifyAdmin, bookController.deactivate);

module.exports = router;
