const makeDir = require('make-dir');
const mkdirp = require('mkdirp');

const fs = require('fs');
const path = require('path');

const {projectRootPath} = require('../rootDir');
var arr = require('../languages/Nodejs/nodejsDir').arr;

async function createDir(title) 
{   
    
    const dirPath1 = path.join(projectRootPath+'/Dynamic-apis/'+title);
    const directory1 = path.normalize(dirPath1);
    const path1 = await makeDir(directory1);
    const dirPath = path.join(projectRootPath+'/Dynamic-apis/'+title+'/');
    await fs.appendFile(dirPath+'mynewfile1.json', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });   
    for(let val of arr) 
    {  
        console.log(val); 
        const directoryPath = path.join(projectRootPath+'/Dynamic-apis/'+title+'/'+val.key);
        const directory = path.normalize(directoryPath);
        await makeDir(directory);   
    }
}
module.exports = {
	createDir
}