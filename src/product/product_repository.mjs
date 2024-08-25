// Berkomunikasi dengan database
//ORM or Raw Query

import prisma from "../db/prisma.mjs";
export const findProduct = async () => await prisma.product.findMany();
export const findProductById = async (id) => {
  const getProductId = await prisma.product.findUnique({
    where: {
      id: id.toString(),
    },
  });
  return getProductId;
};
export const createproduct = async (name, price, stock) => {
  const createProduct = await prisma.product.create({
    data: { name, price, stock },
  });
  return createProduct;
};
export const updateProductById = async (id, name, price, stock) => {
  const productUpdate = await prisma.product.update({
    where: { id: id },
    data: { name, price, stock },
  });
  return productUpdate;
};
export const updateProductSByIdPatch = async (id, name, price, stock) => {
  const productUpdate = await prisma.product.update({
    where: { id: id },
    data: { name, price, stock },
  });
  return productUpdate;
};
export const deletedProduct = async (id) => {
  const deletedProduct = await prisma.product.delete({
    where: {
      id: id,
    },
  });
  return deletedProduct;
};
