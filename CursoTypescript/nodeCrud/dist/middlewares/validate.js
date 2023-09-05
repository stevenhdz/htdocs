"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateId = void 0;
function validateId(req, res, next) {
    const id = req.params.id;
    if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: 'El ID debe ser un número válido.' });
    }
    next();
}
exports.validateId = validateId;
//# sourceMappingURL=validate.js.map