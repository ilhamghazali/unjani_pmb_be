const express = require('express');
const router = express.Router();

const GoodsController = require('../../app/controllers/goodsController');

//CRUD
router.post('/goods',GoodsController.createGoods);
router.get('/goods',GoodsController.getAllGoods);
router.get('/goods/:id',GoodsController.getGoods);
router.put('/goods/:id',GoodsController.updateGoods);
router.delete('/goods/:id',GoodsController.deleteGoods);

module.exports = router;