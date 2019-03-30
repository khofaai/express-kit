import { registerRoute } from './lib/Router';
import { welcomeService } from '~/app/services';

export default [
	registerRoute({
		path: 'welcome-service',
		service: welcomeService
	}),
	registerRoute({
		path: 'welcome',
		service: welcomeService
	}),
	registerRoute({
		'welcome': welcomeService
	})
]