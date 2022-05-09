const routerx = require('express-promise-router');
// Routers
const userRouter = require('./user');
const bookRouter = require('./book');
const newsRouter = require('./news');
const historyRouter = require('./history');
const inventoryRouter = require('./inventory');
// Instances
const router = routerx();

router.use('/user', userRouter);
router.use('/book', bookRouter);
router.use('/news', newsRouter);
router.use('/history', historyRouter);
router.use('/inventory', inventoryRouter);

module.exports = router;
