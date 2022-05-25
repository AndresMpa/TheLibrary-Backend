const routerx = require('express-promise-router');
const storyController = require('../controllers/storyController');
// Instance
const router = routerx();

router.post('/all', storyController.all);
router.post('/reserves', storyController.reserves);
router.post('/add-story', storyController.addStory);
router.post('/cancelled', storyController.cancelled);
router.post('/delivered', storyController.delivered);
router.post('/purchased', storyController.purchased);

module.exports = router;
