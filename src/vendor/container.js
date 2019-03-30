import { env } from '@/config';
import Routes from '~/routes';

export default class Container {
	
	constructor(App, httpServer) {
		this.App = App;
		this.httpServer = httpServer;
	}

	mapRoutes() {
		Routes.map( _router => {
			let {path: _path, method, service} = _router.route;
			this.App[method.toLowerCase()]( _path, _router.middlewares, (req, res) => (new service({req, res})).handle() );
		});
	}

	runServer() {
		this.mapRoutes();
		this.httpServer.listen(env.PORT, () => console.log(`App running at port : ${env.PORT}`));
	}
}
