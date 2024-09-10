import express from "express";
import chalk from "chalk";
import helmet from "helmet";
import { nameByRace } from "fantasy-name-generator";
import http from "http";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error(chalk.red(err.stack));
  res.status(500).send("Something broke!");
};

app.get("/:gender", (req, res, next) => {
  try {
    const { gender } = req.params;
    if (!["male", "female"].includes(gender)) {
      return res.json({ error: "Invalid gender type" });
    }
    const dragonName = nameByRace("dragon", { gender });
    res.status(200).json({ name: dragonName });
  } catch (error) {
    next(error);
  }
});

app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.use(errorHandler);

const server = http.createServer(app);

server.listen(port, () =>
  console.log(chalk.green(`App is listening on Port: ${port}`))
);

const shutdown = () => {
  console.debug(chalk.blue("Shutting down the HTTP server"));
  server.close(() => console.log(chalk.yellow("App is closed")));
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
