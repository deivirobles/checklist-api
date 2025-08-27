import {Router} from 'express';
import * as controler from './controller.js';

//eslint-disable-next-line new-cap
export const router = Router();

/*
    *   /api/todos/   POST     -CREATE
    *   /api/todos/   GET      -READ all
    *   /api/todos/:id GET      -READ one
    *   /api/todos/:id PUT      -UPDATE
    *   /api/todos/:id DELETE   -DELETE
*/ 

router.route('/')
    .post(controler.create)
    .get(controler.all)

router
    .route('/:id')
    .get(controler.read)
    .put(controler.update)
    .delete(controler.remove);