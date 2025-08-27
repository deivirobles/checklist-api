export const create = (req, res, next) =>{
    res.json({})
};

export const all = (req, res, next) =>{
    res.json({})
};

export const read = (req, res, next) =>{
    const {params = {}} = req;
    const {id = ''} = params;
    res.json({
        data:{
            id
        }
    });
};

export const update = (req, res, next) =>{
    res.json({})
};

export const remove = (req, res, next) =>{
    res.json({})
};

