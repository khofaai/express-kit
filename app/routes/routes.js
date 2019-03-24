import { route } from './lib/Router';
import { welcomeService } from '@/app/services';

export default [
	route({
		path: 'welcome-service',
		service: welcomeService
	})
]