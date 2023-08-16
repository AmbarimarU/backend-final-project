const db = require("../db/dbConfig");

const getAllProducts = async () => {
  try {
    const getProducts = await db.any(`SELECT * FROM products`);
    return getProducts;
  } catch (error) {
    return error;
  }
};

const getProductWithId = async (id) => {
  try {
    const getProduct = await db.any(`SELECT * FROM products WHERE id = $1`, id);
    return getProduct;
  } catch (error) {
    return error;
  }
};

const addProduct = async (product) => {
  try {
    const addedProduct = await db.one(
      `INSERT INTO 
    products(name, url, type, description, rating, is_favorite) VALUES($1, $2, $3, $4, $5, $6) returning *`,
      [
        product.name,
        product.url,
        product.type,
        product.description,
        product.rating,
        product.is_favorite,
      ]
    );

    return addedProduct;
  } catch (error) {
    return error;
  }
};

const deleteProduct = async (id) => {
    try {
        const deletedProduct = await db.any(
          `DELETE FROM snacks WHERE id = $1 RETURNING *`,
          id
        );
        return deletedProduct;
    } catch (error) {
        return error;
    }
};

const editProduct = async (id, product) => {
    try {
        const edittedProduct = await db.any(
          `UPDATE product SET name = $1, url = $2, type = $3, description = $4, rating = $5, is_favorite = $6 WHERE id = $7 RETURNING *`,
          [
            product.name,
            product.url,
            product.type,
            product.description,
            product.rating,
            product.is_favorite,
          ]
        );

        return edittedProduct;
    } catch (error) {
        return error;
    }
};

module.exports = {
  getAllProducts,
  getProductWithId,
  addProduct,
  deleteProduct,
  editProduct,
};