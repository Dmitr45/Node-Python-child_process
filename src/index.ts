import  {exec} from 'child_process';
import {PythonShell} from 'python-shell';


type PyFileType =  string;

interface optionsType {
    mode: "text" | "json" | "binary" | undefined,
    //pythonPath: string,
    //pythonOptions: Array<string>,
    scriptPath: string,
    args: Array<string>
}

const PyFile:PyFileType = 'test.py'

const Options:optionsType = {
mode: 'text',
//pythonPath: 'path/to/python',
//pythonOptions: ['-u'], // get print results in real-time
scriptPath: 'pyScripts/',
args: ["Dmitrii", "41"]
}; 




PythonShell.run( PyFile, Options).then(messages=>{
    console.log(messages.toString());
});