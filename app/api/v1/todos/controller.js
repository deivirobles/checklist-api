import { meta } from "@eslint/js";
import { prisma } from '../../../database.js';
import { parsePaginationParams } from '../../utils.js';

export const create = async (req, res, next) =>{
    const {body = {}} = req;

    try{
        const data = await prisma.todo.create({
            data: body
        });

        res.json({
            data: body
        });
    } catch (error){
        next(error);
    }   
};

export const all = async (req, res, next) => {
    const {query = {}} = req;
    const {limit, offset} = parsePaginationParams(query);

    try{
        const [data, total] = await Promise.all([

            prisma.todo.findMany({
            skip: offset,
            take: limit
        }),
        prisma.todo.count()
        ]);

        res.json({
            data,
            meta : {
                limit,
                offset,
                total
            },
        });
    } catch (error){
        next(error);
    }
};

export const read = async (req, res, next) =>{
    const {params = {}} = req;
    const {id = ''} = params;

    try{
        const data = await prisma.todo.findUnique({
            where: {
                id,
            },
        });

        if(data === null){
            return next({
                message: 'todo not found',
                status: 404
            });
        }

        res.json({
            data,
        });
    } catch (error){
        next(error);
    }
};

export const update = async (req, res, next) =>{
    
    try{
        const data = await prisma.todo.update({
            where:{
                id: req.params.id
            },
            data: {
                ...req.body,
                updateAt: new Date(),
            },
        });

        if (data === null){
            return next({
                message: 'todo not found',
                status: 404
            });
        }

        res.json({
            data,
        });
    } catch (error){
        next(error);
    }
};

export const remove = (req, res, next) =>{
    res.json({})
};

