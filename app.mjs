import express, { request, response } from "express";
import { PORT } from "./secret.mjs";
import productRouter from './src/product/product_contoller.mjs'
const app = express();
app.use(express.json());
app.use('/api', productRouter)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
