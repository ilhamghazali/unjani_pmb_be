const db = require('../config/db');

class goodsModel {
  async createGoods(data) {

    const dt = await db('barang')
    .withSchema('procurement')
    .insert({
        nama_barang: data.nama,
        id_vendor: data.idvendor,
        harga_barang: data.harga,
      }).returning('*');

    return dt;
  }

  async getAllGoods() {
    const dt = await db('barang')
    .withSchema('procurement');
    return dt;
  }

  async getGoods(id) {
    const dt = await db('barang')
    .withSchema('procurement')
    .where({ id_barang: id });
    return dt;
  }

  async updateGoods(id,data) {
    const dt = await db('barang')
    .withSchema('procurement')
    .where({ id_barang: id })
    .update({
      nama_barang: data.nama,
      id_vendor: data.idvendor,
      harga_barang: data.harga,
    });

    return dt;
  }

  async deleteGoods(id) {
    const dt = await db('barang')
    .withSchema('procurement')
    .where({ id_barang: id })
    .del();

    return dt;
  }
}

module.exports = new goodsModel();
