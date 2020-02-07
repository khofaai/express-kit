import Service from '../../Service';
import Example from '~/app/models/Example';

export default class createService extends Service {
	
	constructor({req, res}) {
		super({req, res});
	}
	
	async handle() {
		try {
			 let _Example = (new Example).getInstance();
			(new _Example(this.req.body)).save((err, example) => {
				if (err) {
					this.res.send(err)
				} else {
					return this.toJson({
						example
					})
				}
			})
		} catch (e) {
			console.log('data base error.')
			return this.end()
		}

	}
}
