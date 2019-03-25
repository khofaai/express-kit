import Service from '../Service';

export default class ProjectService extends Service {

	constructor({req, res}) {
		super({req, res});
		this.handle({req, res});
	}

	async handle() {
		// instruction
	}
}
