import { env } from '@/config';
import Service from '~/app/services/Service';

class routerUtil {

	getMethods() {
		return ['OPTIONS', 'POST', 'GET', 'PUT', 'DELETE'];
	}

	getPrefix() {
		return env.routePrefix;
	}

	routePrefix(_path) {
		let pFix = this.getPrefix();
		pFix = typeof pFix !== 'undefined' && pFix != '' ? `/${pFix}/` : `/`;
		return `${pFix}${_path}`;
	};

	checkMethod(method) {
		return this.getMethods().includes(method) ? method : this.getMethods()[0];
	}

	getServiceRoute(service) {
		return service.prototype.route;
	}

	hasOneKey(route) {
		return Object.keys(route).length == 1;
	}

	checkServiceHasRoute(service) {
		return typeof service.prototype.route !== 'undefined' && service.prototype.route != '';
	}

	isInstanceOfService(service) {
		return service.prototype instanceof Service;
	}

	hasDetailParams(route) {
		return (
			typeof route.path !== 'undefined' && (route.path).trim() != '' 
			&& typeof route.service !== 'undefined' && this.isInstanceOfService(route.service)
		);
	}

	buildRoute(path, method, service) {
		if(!this.isInstanceOfService(service)) console.error(`${service} do not exist`);
		return {
			path: this.routePrefix(path),
			method: this.checkMethod(method),
			service: service
		}
	}
}

export default routerUtil;