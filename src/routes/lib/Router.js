import routerUtil from './routerUtil';

class Router extends routerUtil {

	constructor() {
		super();
		this.route = null;
		this.middlewares = [];
	}

	registerRoute(route, method = 'GET') {

		if (this.hasOneKey(route)) {
			this.route = this.buildRoute(Object.keys(route)[0], method, Object.values(route)[0]);
		}
		else if (this.isInstanceOfService(route)) {
			this.route = this.buildRoute(this.getServiceRoute(route), method, route);
		}
		else if (this.hasDetailParams(route)) {
			this.route = this.buildRoute(route.path, method, route.service);
		}

		if (typeof this.route !== null) {
			return this;
		}

		console.error(`${route} has errors`);
	}

	middleware(middlewares) {
		this.middlewares = middlewares;
		return this;
	}

}

export default new Router();