const { response } = require("express");

class ResponseClass{

    response(data,status,messages) {

        const resp = {
            data : data,
            meta : {
                status : status,
                messages : messages
            }
        }

        return resp;
    }
}

module.exports = new ResponseClass();