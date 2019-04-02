import { env } from '@/config';
import Routes from '@/app/routes';

export default class Container {
	
	constructor(App, httpServer) {
		this.App = App;
		this.httpServer = httpServer;
	}

	mapRoutes() {
		Routes.map( ({path: _path, method, service}) => {
			this.App[method.toLowerCase()]( _path, (req, res) => (new service({req, res})).handle() );
		});
	}

	runServer() {
		this.mapRoutes();
		this.httpServer.listen(env.PORT, () => console.log(`App running at port : ${env.PORT}`));
	}
}
