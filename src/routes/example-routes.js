import { 
	createExampleService,
	deleteExampleService,
	readAllExampleService,
	readOneExampleService,
	updateExampleService,
} from '~/app/services';

export default  [
	{
		path: 'Example',
		service: createExampleService,
		method: "POST",
	},
	{
		path: 'Example',
		service: readAllExampleService,
		method: "GET",
	},
	{
		path: 'Example/:id',
		service: readOneExampleService,
		method: "GET",
	},
	{
		path: 'Example/:id',
		service: deleteExampleService,
		method: "DELETE",
	},
	{
		path: 'Example/:id',
		service: updateExampleService,
		method: "POST",
	},
]
