const User = require('../models').User
const config = require('../config/configRoles');
const ROLEs = config.ROLEs;

module.exports = {
    checkDuplicateUserNameOrEmail(req, res, next){
        User.findOne({
            where: {
                id:req.body.id
            }
        }).then(user => {
            if(user){
                res.status(400).send({
                    auth:false,
                    id:req.body.id,
                    message: "Error",
                    errors: "Id is already taken!"
                });
                return;
            }
            User.findOne({
                where:{
                    email:req.body.email
                }
            }).then(user => {
                if(user){
                    res.status(400).send({
                        auth:false,
                        id:req.body.id,
                        message: "error",
                        errors: "Email is already taken!"
                    });
                    return;
                }
                next();
            });
        });
    },
    checkRolesExisted(req, res, next){
        for(let i = 0; i < req.body.roles.length;i++){
            if(!ROLEs.includes(req.body.roles[i].toUpperCase())) {
                req.status(400).send({
                    auth:false,
                    id:req.body.id,
                    message: "Error",
                    errors : `Doesn't Not exist role =${req.body.roles[i]}`
                });
                return;
            }
        } 
        next();
    } 
}
