import prisma from "../../prisma/client"

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({ orderBy: { id: "desc" } })

    return {
      success: true,
      message: "List Data Posts!",
      data: posts,
    }
  } catch (e: unknown) {
    console.error(`Error getting posts: ${e}`)
  }
}

export async function createPost(options: { title: string; content: string }) {
  try {
    const { title, content } = options

    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    })

    return {
      success: true,
      message: "Post Created Successfully!",
      data: post,
    }
  } catch (e: unknown) {
    console.error(`Error creating post: ${e}`)
  }
}

export async function getPostById(id: string) {
  try {
    const postId = parseInt(id)

    const post = await prisma.post.findUnique({
      where: { id: postId },
    })

    if (!post) {
      return {
        success: true,
        message: "Detail Data Post Not Found!",
        data: null,
      }
    }

    return {
      success: true,
      message: `Detail Data Post By ID : ${id}`,
      data: post,
    }
  } catch (e: unknown) {
    console.error(`Error finding post: ${e}`)
  }
}
