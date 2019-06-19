import Service from '../../Service';
import Exemple from '~/app/models/Exemple';

export default class createService extends Service {
	
	constructor({req, res}) {
		super({req, res});
	}
	
	async handle() {
		try {
			 let _Exemple = (new Exemple).getInstance();
			(new _Exemple(this.req.body)).save((err, exemple) => {
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