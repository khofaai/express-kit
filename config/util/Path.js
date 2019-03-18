import pathLib from 'path';

let srcDir = pathLib.dirname(require.main.filename);

export default {
	mainFile: require.main.filename,
	src: `${srcDir}/`,
	app: `${srcDir}/app/`,
	config: `${srcDir}/config/`,
};