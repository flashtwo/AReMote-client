import router from './app/app.router';
// import Sass styles for Webpack
import './app/app.styles.sass';
// register components
require('./components').default();
// build client interface
require('./app/app.routes').default(router);