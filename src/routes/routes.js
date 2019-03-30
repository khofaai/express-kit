import Router from './lib/Router';
import { welcomeService } from '~/app/services';

export default [
	Router.registerRoute({
		'welcome-service': welcomeService
	})
]