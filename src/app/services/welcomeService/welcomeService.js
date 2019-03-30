import Service from '../Service';

export default class welcomeService extends Service {

	constructor({req, res}) {
		super({req, res});
		this.route = 'welcome'; //optional
	}

	async handle() {
		// instruction
		this.toJson({
			name:this.constructor.name
		})
	}
}