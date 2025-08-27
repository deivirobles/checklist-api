import {Router} from 'express';

//eslint-disable-next-line new-cap
export const router = Router();

router.route('/').get((req, res, next) => {
    res.json({
        message: "GET all todos"
    });
});