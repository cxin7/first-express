var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    expressLayouts = require('express-ejs-layouts');

    module.exports = function() {
      var app = express();

      // initialize the required module
      if( process.env.NODE_ENV === 'development' ) {
        app.use(morgan('dev'));
      } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
      }

      app.use(bodyParser.urlencoded({
          extended: true
      }));

      app.use(bodyParser.json());
      app.use(methodOverride());

      app.set('views', './app/views');
      app.set('view engine', 'ejs');
      app.use(expressLayouts);

      require('../app/routes/index.server.routes')(app);

      app.use(express.static('./public'));

      return app;
    };
