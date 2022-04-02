const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Joi = require('@hapi/joi');
const mixins = require("../routes/mixins");


const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

router.get("/", async (req, res) => {
    const users = await User.find();
    mixins.result(res, "ok", users,res.statusCode = 200);
});

router.post("/", async (req, res) => {
    const { error } = schemaRegister.validate(mixins.body(req))

    if (error) {
        mixins.result(res, "Error", error.details[0].message ,res.statusCode = 400)
    }

    const isEmailExist = await User.findOne({ email: req.body.email });

    if (isEmailExist) {
        mixins.result(res,"saved",'Email ya registrado',res.statusCode = 400)
    }

    const user = new User(mixins.body(req));
    await user.save();
    mixins.result(res, "saved","Registrado",res.statusCode = 201);
});

router.put("/:id", async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, mixins.body(req));
    mixins.result(res, "updated",null,res.statusCode = 200);
});

router.delete("/:id", async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    mixins.result(res, "removed",null,res.statusCode = 200);
});

module.exports = router;
