import { Elysia } from "elysia"

import { getPosts } from "../controllers/PostController"

const Routes = new Elysia({ prefix: "/posts" }).get("/", () => getPosts())

export default Routes
