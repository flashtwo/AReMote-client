import { dashboardController } from './dashboard/dashboard.component';

const routes = {};
// initial route
routes.dashboard = {
    // require(*.pug) becomes HTML template for Webpack
    template: require('./dashboard/dashboard.pug'),
    controller: dashboardController,
	init: true // True for initial route
};

export default (router) =>
	router.registerRoutes(routes);