import { Config as env } from '../../config';

export default class Container {
	constructor(App) {
		this.app = App;
	}
    runServer() {
        this.app.listen(env.PORT, () => console.log(`App running at port : ${env.PORT}`));
    }
}
