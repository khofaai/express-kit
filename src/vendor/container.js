import { env, trustedHosts } from '@/config';
import Routes from '~/routes';
import bodyParser from 'body-parser';
import cors from 'cors'

import DB from './orm/db';

export default class Container {

	constructor(App, httpServer) {
		this.App = App;
		this.httpServer = httpServer;
	}

	mapRoutes() {
		this.App.use(cors());
		this.App.use(bodyParser.urlencoded({ extended: false }));
		this.App.use(bodyParser.json());
		this.App.use((req, res, next) => {
			//if (trustedHosts.includes(req.headers.origin)) {
				return next();
			//}

			//return res.status(500).send('PAGE NOT FOUND').end();
		});
		Routes.map(_router => {
			let { path: _path, method, service } = _router.route;
			this.App[method.toLowerCase()](_path, _router.middlewares, (req, res) => (new service({ req, res })).handle());
		});
	}

	runServer() {
		this.mapRoutes();
		this.httpServer.listen(env.PORT, () => {
			console.log("####################################");
			console.log(`#### App running at port : ${env.PORT} ####`);
			console.log("####################################");
			console.log("\x1b[32m", `http://${env.DB_HOSTNAME}:${env.PORT}`);
		});
	}
}
