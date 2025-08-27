import {Router} from 'express';

//eslint-disable-next-line new-cap
export const router = Router();

/*
    *   /api/todos/   POST     -CREATE
    *   /api/todos/   GET      -READ all
    *   /api/todos/:id GET      -READ one
    *   /api/todos/:id PUT      -UPDATE
    *   /api/todos/:id DELETE   -DELETE
*/ 

router
    .route('/')
    .get('/', (req, res,next) => {})
    .post('/', (req, res,next) => {})

router
    .route('/:id')
    .get((req, res, next) => {})
    .put((req, res, next) => {})
    .delete((req, res, next) => {});