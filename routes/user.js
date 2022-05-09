const routerx = require('express-promise-router');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
// Instance
const router = routerx();

router.get('/test', userController.test);
router.post('/add',auth.verifyClient, userController.add);

module.exports = router;
