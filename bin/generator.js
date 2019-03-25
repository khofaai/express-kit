const Generator = require('component-file-generator');

Generator.exec([
    {
        'service': {
            root:'./app/services',
            structure: {
                name: "[name]",
                children:[
                    {
                        type: "file",
                        name: "readme.md",
                        content: "# [name] Service\n description"
                    },
                    {
                        type: "file",
                        name: "[name]Service.js",
                        content: `import Service from '../Service';\n\nexport default class [name]Service extends Service {\n\n\tconstructor({req, res}) {\n\t\tsuper({req, res});\n\t\tthis.handle({req, res});\n\t}\n\n\tasync handle() {\n\t\t// instruction\n\t}\n}\n`
                    },
                    {
                        type: "file",
                        name: "package.json",
                        content: "{\n\t\"main\": \"./[name]Service.js\"\n}"
                    }
                ]
            }
        }
    },
    {
        'controller': {
            root:'./app/controllers',
            structure: {
                name: "[name]Controller",
                children:[
                    {
                        type: "file",
                        name: "readme.md",
                        content: "# [name] Controller\n description"
                    },
                    {
                        type: "file",
                        name: "[name]Controller.js",
                        content: `import controller from '../controller';\n\nexport default class [name]Controller extends controller {\n\t// instructions\n}\n`
                    },
                    {
                        type: "file",
                        name: "package.json",
                        content: "{\n\t\"main\": \"./[name]Controller.js\"\n}"
                    }
                ]
            }
        }
    },
    {
        'model': {
            root:'./app/models',
            structure: {
                name: "[name]",
                children:[
                    {
                        type: "file",
                        name: "readme.md",
                        content: "# [name] Controller\n description"
                    },
                    {
                        type: "file",
                        name: "schema.js",
                        content: `export default {\n\t_id: Number\n}\n`
                    },
                    {
                        type: "file",
                        name: "[name].js",
                        content: `import Model from '../Model';\nimport Schema from './schema';\n\nclass [name] extends Model {\n\tconstructor() {\n\t\tsuper(Schema);\n\t}\n}\n\nexport default [name];\n`
                    },
                    {
                        type: "file",
                        name: "package.json",
                        content: "{\n\t\"main\": \"./[name].js\"\n}"
                    }
                ]
            }
        }
    }
]);