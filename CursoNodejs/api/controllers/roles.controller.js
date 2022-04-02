const Role = require('../models/Role');
const Joi = require('@hapi/joi');
const mixins = require("../controllers/mixins.controller");

const schemaRole = Joi.object({
    name: Joi.string().min(1).max(125).required(),
    description: Joi.string().min(1).max(355)
})


bodyRoles = (req) => {
    const body = {
        name: req.body.name,
        description: req.body.description
    };
    return body;
}

const findAllRoles = async (req, res) => {
    const rolesFound = await Role.find();
    if(rolesFound.length == 0){
        mixins.CustomLog(req, `No found` + rolesFound + ', status ' + 200, 'alex')
    }else{
        mixins.result(res, "Find", rolesFound, res.statusCode = 200)
    }
}

const createRole = async (req, res) => {
    const { error } = schemaRole.validate(bodyRoles(req));
    if (error) {
        mixins.CustomLog(req, "Error" + error.details[0].message + ', status ' + 400, 'alex')
        return mixins.result(res, "Error", error.details[0].message, res.statusCode = 400)
    }
    const newRole = new Role(bodyRoles(req));
    const rolesFound = await Role.findOne({name: { $eq: newRole.name }});

    if(rolesFound === null){
        const roleSaved = await newRole.save();
        mixins.result(res, "Created", roleSaved, res.statusCode = 201)
        mixins.CustomLog(req, `Role with id ${roleSaved._id} was created` + ', status ' + 201, 'alex')
    }else{
        mixins.result(res, "Duplicado", res.statusCode = 201)
        mixins.CustomLog(req, `Role duplicate` + ', status ' + 201, 'alex')

    }
}

const findRoleById = async (req, res) => {
    const { id } = req.params;
    var roleFound = await Role.findById(id,function (err, docs) {
        if(err){
            mixins.result(res, 'Error', `No role found with id ${id}`, res.statusCode = 404)
            mixins.CustomLog(req, `No role found with id ${id}` + ', status ' + 404, 'alex')
        }else{
            mixins.result(res, 'FindOne', roleFound, res.statusCode = 200)
            mixins.CustomLog(req, `role found with id ${id}` + ', status ' + 404, 'alex')
        }});
}

const deleteRole = async (req, res) => {
    const { id } = req.params;
    await Role.findByIdAndDelete(id,function (err, docs) {
        if (err){
            mixins.result(res, 'Error', `No role found with id ${id}`, res.statusCode = 404)
            mixins.CustomLog(req, `No role found with id ${id}` + ', status ' + 404, 'alex')
        }else{
            mixins.result(res, 'Deleted', `Role with id ${id} was deleted`, res.statusCode = 200)
            mixins.CustomLog(req, `Role with id ${id} was deleted` + ', status ' + 200, 'alex')
        }});

}

const updateRole = async (req, res) => {
    const { error } = schemaRole.validate(req.body);
    if (error) return mixins.result(res, "Error", error.details[0].message, res.statusCode = 400)
    await Role.findByIdAndUpdate(req.params.id, bodyRoles(req), {
        useFindAndModify: false
    },function (err, docs) {
        if (err){
            mixins.result(res, 'Error', `No role found with id ${req.params.id}`, res.statusCode = 404)
            mixins.CustomLog(req, `No role found with id ${req.params.id}` + ', status ' + 404, 'alex')
        }else{
            mixins.result(res, 'Updated', `Role with id ${req.params.id} was updated`, res.statusCode = 200)
            mixins.CustomLog(req, `Role with id ${req.params.id} was updated` + ', status ' + 200, 'alex')
        }});
}

const all = {
    findAllRoles,
    createRole,
    findRoleById,
    deleteRole,
    updateRole,
}

module.exports = all;