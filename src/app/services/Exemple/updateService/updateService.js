import Service from '../../Service';
import Exemple from '~/app/models/Exemple';

// let axios = require('axios')

export default class updateService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {

		try {
			let _Exemple = (new Exemple).getInstance();
			_Exemple.update({ _id: this.req.params.id }, this.req.body, (err, exemple) => { // to Object_Id may be a future probleme
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