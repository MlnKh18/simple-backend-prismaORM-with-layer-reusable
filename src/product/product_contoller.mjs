// Layer Untuk handle request dan response
// Biasanya juga handle validasi body
import express from "express";
import {
  postProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProductPatch,
  updateProductPut,
} from "./product_service.mjs";

const router = express.Router();

router.get("/", (request, response) => {
  response.send("Hello, World!");
});

// Product
//-> All Products
router.get("/products", async (request, response) => {
  const product = await getAllProducts;
  response.send(product);
});

// -> getProductById
router.get("/product/:id", async (request, response) => {
  const id = request.params.id;
  const product = await getProductById(id);
  if (!product) response.status(400).send("Product Not Found");
  response.status(200).send(product);
});

// -> Create product
router.post("/product", async (request, response) => {
  const { name, price, stock } = request.body;
  const product = postProduct(name, price, stock);
  response.status(201).json(product);
});

// -> put product
router.put("/product/:id", async (request, response) => {
  const { id } = request.params;
  const { name, price, stock } = request.body;
  try {
    if (!(name, price, stock)) {
      return response.status(400).json({ message: "Invalid request body" });
    }
    const productUpdate = await updateProductPut(id, name, price, stock);
    response.status(200).json(productUpdate);
  } catch (error) {
    response.status(404).send("Product not found");
  }
});

// -> Patch product
router.patch("/product/:id", async (request, response) => {
  const { id } = request.params;
  const { name, price, stock } = request.body;
  try {
    // if (!(name, price, stock)) {
    //   return response.status(400).json({ message: "Invalid request body" });
    // }
    const productUpdate = await updateProductPatch(id, name, price, stock);
    response.status(200).json(productUpdate);
  } catch (error) {
    response.status(404).send("Product not found");
  }
});

// -> Delete product
router.delete("/product/:id", async (req, res) => {
  const { id } = req.params; // Mengambil parameter id dari URL
  try {
    const deletedProduct = await deleteProduct(id);
    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    if (error.code === "P2025") {
      res.status(404).json({ message: "Product not found" });
    } else {
      res
        .status(500)
        .json({ message: "An error occurred while deleting the product" });
    }
  }
});
const productRouter = router;
export default productRouter;
