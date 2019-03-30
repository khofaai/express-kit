import Service from '../Service';

export default class welcomeService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {
		// instruction
		this.toJson({
			name:this.constructor.name
		})
	}
}