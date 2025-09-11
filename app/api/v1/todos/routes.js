import {Router} from 'express';
import * as controler from './controller.js';

//eslint-disable-next-line new-cap
export const router = Router();

router.route('/').get((req, res, next) => {
    res.json({
        message: "GET all todos"
    });
});

router.route('/').post(controler.create).get(controler.all);

router.param('id', controler.id);

router
    .route('/:id')
    .get(controler.read)
    .put(controler.update)
    .delete(controler.remove);