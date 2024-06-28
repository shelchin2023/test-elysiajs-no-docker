import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia33").listen(80);

console.log(
  `🦊 Elysia is running at 222 ${app.server?.hostname}:${app.server?.port}`
);
