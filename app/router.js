'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  require('./router/info')(app);
  require('./router/admin')(app);
  require('./router/teacher')(app);

  router.get('/classaerch', controller.home.classaerch);
};
