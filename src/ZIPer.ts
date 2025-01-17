import { zip } from 'zip-a-folder';


type pathFolderType = string; 

type pathZIParchiveType = {
    PathZIP : string
}; 


async function ZIPer( path:pathFolderType ):Promise<pathZIParchiveType>{
console.log(`Архивируем папку: ${path}`);

let returnPathZIP = `${path}/Result.zip`;
await zip(path, `${path}/Result.zip`);

return { "PathZIP" : returnPathZIP } 
}


ZIPer("./RESULT");