
import Service from '../../Service';
import Example from '~/app/models/Example';

// let axios = require('axios')

export default class deleteService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {

		try {
			let _Example = (new Example).getInstance();
			_Example.remove({ _id: this.req.params.id }, (err, Example) => {
				if (err) {
					this.res.send(err)
				} else {
					return this.toJson({
						Example
					})
				}
			})
		} catch (e) {
			console.log('data base error.')
			return this.end()
		}
	}
}
