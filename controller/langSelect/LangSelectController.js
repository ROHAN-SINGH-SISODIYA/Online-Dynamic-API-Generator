const LangSelectModel = require('../../model/langSelect/langSelect');
const {projectRootPath} = require('../../rootDir');
var arr = require('../../languages/Nodejs/nodejsDir').arr;
const createNodejsDir =require('../dirController');

//messages
const errorMessage = 'Failed to process request';
const successMessage = 'success';

//using promise
exports.LangSelect = async (req,res,next) => {
    console.log("lang Select Data", req.body);
    const lang=req.body.langSelect;
    const project_title=req.body.project_title;
    const langSelect = new LangSelectModel(req.body);
    if(lang==='nodejs')
    {
            await createNodejsDir.createDir(project_title, function(error) {
                if(error) {
                    res.status(500).send({message : errorMessage});
                }
                next();
            });
            await langSelect.save((err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        error: 'Something went wrong'
                    });
                }
                res.json({
                    data
                });
            });
    }
    else{
        res.json({
            error:"Please Select only Nodejs"
        });
    }      
};


  

