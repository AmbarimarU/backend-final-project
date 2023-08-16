const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductWithId,
  addProduct,
  deleteProduct,
  editProduct,
} = require("../queries/product");

const { checkRequest } = require("../validations/checkProduct")

router.get("/", async (req, res) => {
  const products = await getAllProducts();

  //console.log(products);
  if (!Array.isArray(products)) {
    res.status(404).json({});
  } else {
    res.json(products);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await getProductWithId(id);

  if (product.lenght === 0) {
    res.status(404).json({ error: "Product not found!" });
  } else {
    res.json(product[0]);
  }
});

router.post("/", checkRequest, async (req, res) => {
  const createdProduct = await addProduct(req.params);
  res.json(createdProduct);
});

router.delete("/:id", async (req, res) => {
  const removedProduct = await deleteProduct(rep.params.id);

  if (removedProduct.length === 0) {
    return res.status(404).json({ error: "Product not found!" });
  } else {
    return res.json(removedProduct[0]);
  }
});

router.put("/:id", checkRequest, async (req, res) => {
  const edit = await editProduct(req.params.id, req.body);
  if (edit.length === 0) {
    return res
      .status(404)
      .json({ error: true, message: "Product not found!" });
  } else {
    return res.json(editProduct[0]);
  }
});

module.exports = router;