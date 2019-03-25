import Service from '../Service';

export default class welcomeService extends Service {

	constructor({req, res}) {
		super({req, res});
		this.handle({req, res});
	}

	async handle() {
		// instruction
		return this.toJson({
			name:this.constructor.name
		})
	}
}