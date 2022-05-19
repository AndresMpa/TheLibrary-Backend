const routerx = require('express-promise-router');
// Routers
const userRouter = require('./user');
const bookRouter = require('./book');
const newsRouter = require('./news');
const storyRouter = require('./story');
const inventoryRouter = require('./inventory');
// Instances
const router = routerx();

router.use('/user', userRouter);
router.use('/book', bookRouter);
router.use('/news', newsRouter);
router.use('/story', storyRouter);
router.use('/inventory', inventoryRouter);

module.exports = router;
