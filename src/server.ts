import cors from "cors";
import express, {
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from "express";
import morgan from "morgan";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(routes);

const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof Error) {
    res.status(400).json({
      message: err.message,
    });
    return;
  }
  res.status(500).json({
    message: "Internal server error",
  });
};

app.use(errorHandler);

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
