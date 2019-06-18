import Service from '../../Service';
import Exemple from '~/app/models/Exemple';

// let axios = require('axios')

export default class readOneService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {
		try {
			let _Exemple = (new Exemple).getInstance();
			_Exemple.findOne({ _id: this.req.params.id }, (err, exemple) => {
				if (err) {
					this.res.send(err)
				} else {
					return this.toJson({
						exemple
					})
				}
			})
		} catch (e) {
			console.log('data base error.')
			return this.end()
		}
	}

}