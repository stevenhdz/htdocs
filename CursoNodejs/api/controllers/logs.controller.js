const Log = require('../models/Log');
const Joi = require('@hapi/joi');
const mixins = require("../controllers/mixins.controller");

const schemaLogs = Joi.object({
    eventExecute: Joi.string().min(1).max(255).required(),
    bodyAll: Joi.string(),
    responsible:  Joi.string().min(1).max(255).required(),
})

bodyLogs = (req) => {
    const body = {
        eventExecute: req.body.eventExecute,
        bodyAll: req.body.bodyAll,
        responsible: req.body.responsible
    };
    return body;
}

const findAllLogs = async (req, res) => {
    const logsFound = await Log.find();
    mixins.result(res, "Find", logsFound, res.statusCode = 200)
}

const createLog = async (req, res) => {
    const { error } = schemaLogs.validate(bodyLogs(req));
    if (error) return mixins.result(res, "Error", error.details[0].message, res.statusCode = 400)
    const newLog = new Log(bodyLogs(req));
    const logSaved = await newLog.save();
    mixins.result(res, "Created", logSaved, res.statusCode = 201)
}

const findLogById = async (req, res) => {
    const { id } = req.params;
    const logsFound = await Log.findById(id).catch(
        error => mixins.result(res, 'Error', `No role found with id ${id}` , res.statusCode = 404)
    );
    mixins.result(res, 'FindOne', logsFound, res.statusCode = 200)
}

const all = {
    findAllLogs,
    createLog,
    findLogById
}

module.exports = all;