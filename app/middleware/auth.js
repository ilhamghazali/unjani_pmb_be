const jwt = require('jsonwebtoken');
const ResponseClass = require('../services/response')
require('dotenv').config({path: __dirname + '/../../.env'});

class Auth{
    getToken(req,res) {
        jwt.sign({user: req.body}, process.env.JWT_SECRET, (err,token) =>{
            res.json({token:token});
        });
    }

    async verifyToken(req,res,next) {
        const bearer_header = req.headers['authorization'];
        var code;
        var data;
        var status;
        var msg;

        if(typeof bearer_header !== 'undefined'){

            const split = bearer_header.split(' ');
            const bearer_token = split[1];

            await jwt.verify(bearer_token, process.env.JWT_SECRET, function(err,decoded) {
                if (err) {
                    code = 403;
                    data = null;
                    status = 'error';
                    msg = 'Invalid token';
                }else{
                    next()
                }
            })
        }else{
            code = 403;
            data = null;
            status = 'error';
            msg = 'Forbidden';
        }

        const resp = ResponseClass.response(data,status,msg);
        res.status(code).json(resp);
    }
}

module.exports = new Auth();