import dotenvLib from 'dotenv';

// to bind .env file configuration to `process.env` global values
dotenvLib.config();
let optional = (arg, _def) => {
	return typeof arg !== 'undefined' ? arg : _def
}

export default {
    PORT: optional(process.env.PORT, 3000)
}