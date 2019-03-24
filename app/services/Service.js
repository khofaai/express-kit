export default class Service {

	constructor({req, res}) {
		this.req = req;
		this.res = res;
	};

	toJson(data) {
		return this.getResponse().json(data);
	}

	end(data) {
		return this.getResponse().end(data);
	}

	getResponse() {
		return this.res;
	}

	getRequest() {
		return this.req;
	}
}