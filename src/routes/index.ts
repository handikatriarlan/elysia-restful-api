import { Elysia, t } from "elysia"

import { createPost, getPosts } from "../controllers/PostController"

const Routes = new Elysia({ prefix: "/posts" })
  .get("/", () => getPosts())
  .post(
    "/",
    ({ body }) => createPost(body as { title: string; content: string }),
    {
      body: t.Object({
        title: t.String({
          minLength: 3,
          maxLength: 100,
        }),
        content: t.String({
          minLength: 3,
          maxLength: 1000,
        }),
      }),
    }
  )

export default Routes
