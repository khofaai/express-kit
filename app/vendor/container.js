import env from '../config';

export default class Container {
    runServer(App) {
        App.listen(env.PORT, () => console.log(`App running at port : ${env.PORT}`));
    }
}

