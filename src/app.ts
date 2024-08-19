import express from "express";
import userRouter from "./routes/user.routes";
import categoryRouter from "./routes/category.routes";
import morgan from "morgan";

const app = express();
const port = 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/users", userRouter);
app.use("/category", categoryRouter);

app.listen(port, () => {
  console.log(`Controle-Mensal API running on port ${port}`);
});

export default app;