// Service layer bertujuan untuk handle business logic
// Kenapa dipisah? supaya tanggung jawab terisolate dan functionsnya reusable
import prisma from "../db/prisma.mjs";

import {
  createproduct,
  deletedProduct,
  findProduct,
  findProductById,
  updateProductById,
  updateProductSByIdPatch,
} from "./product_repository.mjs";

export const getAllProducts = findProduct();

export const postProduct = async (name, price, stock) =>
  await createproduct(name, price, stock);
export const getProductById = async (id) => await findProductById(id);
export const updateProductPut = async (id, name, price, stock) =>
  await updateProductById(id, name, price, stock);
export const updateProductPatch = async (id, name, price, stock) =>
  await updateProductSByIdPatch(id, name, price, stock);

export const deleteProduct = async (id) => await deletedProduct(id);
