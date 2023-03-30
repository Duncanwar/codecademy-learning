const apiRouter = require('express').Router();

const minionsRouter = require('./minions');
const ideasRouters = require('./ideas');
const meetingsRouters = require('./meetings');

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouters);
apiRouter.use('/meetings', meetingsRouters)

module.exports = apiRouter;
