import express from "express";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";

const app = express();

//* settings
app.set("port", process.env.PORT || 3000);

//* middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());

app.get("/", (req, res) => {
  return res.send(`Api at http://localhost:${app.get("port")}`);
});

export default app;
