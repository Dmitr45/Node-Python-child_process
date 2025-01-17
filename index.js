"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var python_shell_1 = require("python-shell");
var PyFile = 'test.py';
var Options = {
    mode: 'text',
    //pythonPath: 'path/to/python',
    //pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'pyScripts/',
    args: ["Dmitrii", "41"]
};
python_shell_1.PythonShell.run(PyFile, Options).then(function (messages) {
    console.log(messages.toString());
});
