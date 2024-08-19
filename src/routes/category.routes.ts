import { Router } from "express";
import categoryController from "../controllers/category.controller";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const categories = await categoryController.getCategories();

    return res.status(200).send({ data: categories, statusCode: res.statusCode });
  } catch (error: any) {
    if (error.message === "CATEGORY_NOT_FOUND") {
      return res.status(404).send({ data: error.message, statusCode: res.statusCode });
    }
  }
})

export default routes;