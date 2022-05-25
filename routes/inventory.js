const routerx = require('express-promise-router');
const inventoryController = require('../controllers/inventoryController');
// Instance
const router = routerx();

router.get('/raw-list', inventoryController.rawList);
router.post('/add', inventoryController.addInventory);
router.post('/update', inventoryController.updateInventory);

module.exports = router;
