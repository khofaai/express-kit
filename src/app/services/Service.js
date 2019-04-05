export default class Service {
	
	constructor({req, res}) {
		this.req = req;
		this.res = res;
	};

	toJson(data, status = 200) {
		return this.getResponse().status(status).json(data);
	}

	end(data, status = 200) {
		return this.getResponse().status(status).end(data);
	}

	getResponse() {
		return this.res;
	}

	getRequest() {
		return this.req;
	}

	setResponse(res) {
		this.res = res;
	}

	setRequest(req) {
		this.req = req;
	}
}