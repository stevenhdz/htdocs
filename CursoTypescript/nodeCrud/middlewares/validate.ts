import { Request, Response, NextFunction } from 'express';

interface ValidatedRequest extends Request {
    params: {
        id: string;
    };
}

export function validateId(req: ValidatedRequest, res: Response, next: NextFunction) {
    const id = req.params.id;

    if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: 'El ID debe ser un número válido.' });
    }

    next();
}