import express, { Application} from "express";
import morgan from "morgan";
import authRoutes  from "./routes/auth";

const app: Application = express();

// settings
app.set('port', 3000);

// middlewares
app.use(morgan('dev'));

// Routes
app.use(authRoutes)

export default app;