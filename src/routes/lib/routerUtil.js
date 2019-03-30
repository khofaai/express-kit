import { env } from '@/config';

let routePrefix = (_path) => {
	return typeof env.routePrefix !== 'undefined' && env.routePrefix != '' ? `/${env.routePrefix}/${_path}` : `/${_path}`;
};

let checkMethod = (method) => {
	return ['POST','GET','PUT','DELETE','OPTIONS'].includes(method) ? method : 'OPTIONS';
}

let checkService = (service) => {
	return service;
}

let buildRoute = ({path, method = 'GET', service}) => {
	return {
		path: routePrefix(path),
		method: checkMethod(method),
		service: checkService(service)
	}
};

export {
	buildRoute,
	checkMethod,
	routePrefix
}