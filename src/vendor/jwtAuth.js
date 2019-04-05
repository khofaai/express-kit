import jwt from 'jsonwebtoken';
import { env } from '@/config';

class jwtAuth {

	constructor() {
		this.key = env.KEY;
	}

	sign() {
		let token = this.randStr();
		return jwt.sign({
			token
		}, this.key, { algorithm: 'HS256'})
	}

	decode(token) {
		return jwt.decode(token, {complete: true})
	}

	verify(token) {
		try {
			jwt.verify(token, this.key )
			return true;
		} catch(err) {
			return err.message;
		}
	}

	randStr(length = 16) {
	  let text = "";
	  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	  for (let i = 0; i < length; i++)
	    text += possible.charAt(Math.floor(Math.random() * possible.length));
	  return text;
	}
}

export default new jwtAuth;