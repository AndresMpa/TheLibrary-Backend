const routerx = require('express-promise-router');
const storyController = require('../controllers/storyController');
// Instance
const router = routerx();

router.post('/all', storyController.all);
router.post('/cancelled', storyController.cancelled);
router.post('/delivered', storyController.delivered);
router.post('/returned', storyController.returned);
router.post('/reserves', storyController.reserves);

module.exports = router;
