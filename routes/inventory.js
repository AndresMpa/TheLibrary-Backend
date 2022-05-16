const routerx = require('express-promise-router');
const inventoryController = require('../controllers/inventoryController');
const auth = require('../middlewares/auth');
// Instance
const router = routerx();

router.get('/test', inventoryController.test);
router.post('/add', auth.verifyClient, inventoryController.add);

module.exports = router;
