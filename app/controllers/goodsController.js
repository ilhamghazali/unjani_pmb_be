const goodsModel = require('../models/goodsModel');
const ResponseClass = require('../services/response')

class goodsController{

    async createGoods(req,res){
        try {
            const data = await goodsModel.createGoods(req.body);
            const resp = await ResponseClass.response(data,'success','Data Created');

            res.status(201).json(resp);

        } catch (error) {
            const resp = ResponseClass.response(null,'error','Something Went Wrong');
            res.status(500).json(resp);
        }
    }

    async getAllGoods(req,res){
        try {
            const data = await goodsModel.getAllGoods();
            const resp = await ResponseClass.response(data,'success','Data Retreived');

            res.status(200).json(resp);

        } catch (error) {
            const resp = ResponseClass.response(null,'error','Something Went Wrong');
            res.status(500).json(resp);
        }
    }

    async getGoods(req,res){
        try {
            const data = await goodsModel.getGoods(req.params.id);
            const resp = await ResponseClass.response(data,'success','Data Retreived');

            res.status(200).json(resp);

        } catch (error) {
            const resp = ResponseClass.response(null,'error','Something Went Wrong');
            res.status(500).json(resp);
        }
    }

    async updateGoods(req,res){
        try {
            const data = await goodsModel.updateGoods(req.params.id,req.body);
            const resp = await ResponseClass.response(data,'success','Data Updated');

            res.status(200).json(resp);

        } catch (error) {
            const resp = ResponseClass.response(null,'error','Something Went Wrong');
            res.status(500).json(resp);
        }
    }

    async deleteGoods(req,res){
        try {
            const data = await goodsModel.deleteGoods(req.params.id,req.body);
            const resp = await ResponseClass.response(data,'success','Data Deleted');

            res.status(200).json(resp);

        } catch (error) {
            const resp = ResponseClass.response(null,'error','Something Went Wrong');
            res.status(500).json(resp);
        }
    }

}

module.exports = new goodsController();