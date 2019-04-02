import Service from '../Service';
import { env } from '@/config';

export default class ProjectService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {
		// instruction
		return this.toJson({name: this.constructor.name})
	}
}
