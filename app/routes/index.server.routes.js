module.exports=function(app){
  var staticPageController = require('../controllers/staticpage.server.controller');
  app.get('/',staticPageController.renderHome);
  app.get('/about',staticPageController.renderAbout);
  app.get('/contact',staticPageController.renderContact);
};
