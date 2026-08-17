const Commit = require('../models/Commit');
const Joi = require('@hapi/joi');
const mixins = require("../controllers/mixins.controller");

const schemaCommit = Joi.object({
    idCharacter: Joi.string().min(1).max(255).required(),
    nameCharacter: Joi.string().min(1).max(255).required(),
    commit: Joi.string().min(1).max(255).required(),
    responsible: Joi.string().min(1).max(255).required()
})

commit = (req) => {
    const body = {
        responsible: req.body.responsible,
        commit: req.body.commit,
        idCharacter: req.body.idCharacter,
        nameCharacter: req.body.nameCharacter
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
    const { idCharacter } = req.params;
    var commitFound = await Commit.find({idCharacter: idCharacter });

    if(commitFound === null){
        mixins.result(res, 'Error', `No Commit found with episode ${idCharacter}`, res.statusCode = 404)
        mixins.CustomLog(req, `No Commit found with episode ${idCharacter}` + ', status ' + 404, 'alex')
    }else{
        mixins.result(res, 'FindOne', commitFound, res.statusCode = 200)
        mixins.CustomLog(req, `Commit found with episode ${idCharacter}` + ', status ' + 404, 'alex')
    }
}

const all = {
    findAllCommit,
    createCommit,
    findCommitById
}

module.exports = all;