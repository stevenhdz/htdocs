const Commit = require('../models/Commit');
const Joi = require('@hapi/joi');
const mixins = require("../controllers/mixins.controller");

const schemaCommit = Joi.object({
    id : Joi.string().required(),
    cms: Joi.array().required(),
})

commit = (req) => {
    const body = {
        id: req.body.id,
        cms: req.body.cms
    };
    return body;
}

const findAllCommit = async (req, res) => {
    const commitFound = await Commit.find();
    if(commitFound.length == 0){
        mixins.CustomLog(req, `No found` + commitFound + ', status ' + 200, 'alex')
    }else{
        mixins.result(res, "Find", commitFound, res.statusCode = 200)
    }
}

const createCommit = async (req, res) => {
    const { error } = schemaCommit.validate(commit(req));
    if (error) {
        mixins.CustomLog(req, "Error" + error.details[0].message + ', status ' + 400, 'alex')
        return mixins.result(res, "Error", error.details[0].message, res.statusCode = 400)
    }
    const newCommit = new Commit(commit(req));
  
        const commitSaved = await newCommit.save();
        mixins.result(res, "Created", commitSaved, res.statusCode = 201)
        mixins.CustomLog(req, `Commit with id ${commitSaved._id} was created` + ', status ' + 201, 'alex')
   
}

const findCommitById = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    var commitFound = await Commit.find({"id": id });

    if(commitFound === null){
        mixins.result(res, 'Error', `No Commit found with episode ${id}`, res.statusCode = 404)
        mixins.CustomLog(req, `No Commit found with episode ${id}` + ', status ' + 404, 'alex')
    }else{
        mixins.result(res, 'FindOne', commitFound, res.statusCode = 200)
        mixins.CustomLog(req, `Commit found with episode ${id}` + ', status ' + 404, 'alex')
    }
}

const deleteCommit = async (req, res) => {
    const { id } = req.params;
    await Commit.findByIdAndDelete(id,function (err, docs) {
        if (err){
            mixins.result(res, 'Error', `No role found with id ${id}`, res.statusCode = 404)
            mixins.CustomLog(req, `No role found with id ${id}` + ', status ' + 404, 'alex')
        }else{
            mixins.result(res, 'Deleted', `Role with id ${id} was deleted`, res.statusCode = 200)
            mixins.CustomLog(req, `Role with id ${id} was deleted` + ', status ' + 200, 'alex')
        }});

}

const updateCommit = async (req, res) => {
    try {
        await Commit.findByIdAndUpdate(req.params.id, commit(req),function (err, docs) {
            if (err){
                mixins.result(res, 'Error', `No role found with id ${req.params.id}`, res.statusCode = 404)
                mixins.CustomLog(req, `No role found with id ${req.params.id}` + ', status ' + 404, 'alex')
            }else{
                mixins.result(res, 'Updated', `Role with id ${req.params.id} was updated`, res.statusCode = 200)
                mixins.CustomLog(req, `Role with id ${req.params.id} was updated` + ', status ' + 200, 'alex')
            }});
    } catch (error) {
        
    }
   
}


const all = {
    findAllCommit,
    createCommit,
    findCommitById,
    deleteCommit,
    updateCommit
}

module.exports = all;