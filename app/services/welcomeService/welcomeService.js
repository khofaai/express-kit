import Service from '../Service';

export default class welcomeService extends Service {

	constructor({req, res}) {
		super({req, res});
		this.handle({req, res});
	}

	async handle() {
		let data = {
			serviceName: 'welcomeService'
		}
		this.toJson(data);
	}


}


// {domain}/api/welcome-service/$
// {domain}/api/welcome-service | {data}