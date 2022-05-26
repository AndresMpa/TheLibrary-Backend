const routerx = require('express-promise-router');
// Routers
const userRouter = require('./user');
const bookRouter = require('./book');
const newsRouter = require('./news');
const storyRouter = require('./story');
// Instances
const router = routerx();

router.use('/user', userRouter);
router.use('/book', bookRouter);
router.use('/news', newsRouter);
router.use('/story', storyRouter);

module.exports = router;
