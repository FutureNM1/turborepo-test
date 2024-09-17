import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import DotEnv from "dotenv";

const app = new Hono();
DotEnv.config();
app.use(cors({ origin: "*" }));

app.get("/api", (c) => {

  return c.json({ res: process.env.NAME });
});

app.get("/api/v2", (c) => {

  return c.json({ res: process.env.NAME + " v2" });
});

const port = 3100;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
