import express from "express";
import chalk from "chalk";
import helmet from "helmet";
import { nameByRace } from "fantasy-name-generator";
import http from "http";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());

const errorHandler = (err, req, res) => {
  console.error(chalk.red(err.stack));
  res.status(500).json({ error: "Internal Server Error" });
};

app.get("/:gender", (req, res) => {
  const { gender } = req.params;
  if (!["male", "female"].includes(gender)) {
    return res.status(400).json({ error: "Invalid gender type" });
  }
  const dragonName = nameByRace("dragon", { gender });
  res.json({ name: dragonName });
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
