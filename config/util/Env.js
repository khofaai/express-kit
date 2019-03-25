import dotenvLib from 'dotenv';

// to bind .env file configuration to `process.env` global values
dotenvLib.config();
let optional = (arg, _def) => {
	return typeof arg !== 'undefined' ? arg : _def
}

export default {
	PORT: optional(process.env.PORT, 3000),
	DB_PORT: optional(process.env.DB_PORT, 27017),
	DB_USERNAME: optional(process.env.DB_USERNAME, 'root'),
	DB_PASSWORD: optional(process.env.DB_PASSWORD, 'root'),
	DB_NAME: optional(process.env.DB_NAME, 'myapp'),
	DB_HOSTNAME: optional(process.env.DB_HOSTNAME, '127.0.0.1')
}