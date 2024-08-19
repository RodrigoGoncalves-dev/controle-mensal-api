import { Router } from "express";
import userController from "../controllers/user.controller";

const routes = Router();

routes.get("/:userId", async (req, res) => {
  try {
    let { userId } = req.params;

    const getUser = await userController.getUserById(parseInt(userId));

    return res.status(200).send({ data: getUser, statusCode: res.statusCode });
  } catch (error: Error | any) {
    if (error.message === "USER_NOT_FOUND") {
      return res.status(404).send({ data: error.message, statusCode: res.statusCode });
    }
  }
});

routes.post("/", async (req, res) => {
  const user = req.body;
  const createUser = await userController.createUser(user);
  return res.status(200).send({ data: createUser });
});

export default routes;