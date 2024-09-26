import express from "express";
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProducts,
  deleteProducts,
} from "../controller/productController.js";

const router = express.Router();

router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getSingleProduct);
router.put("/products/:id",updateProducts)
router.delete("/products/:id",deleteProducts)

export default router;
