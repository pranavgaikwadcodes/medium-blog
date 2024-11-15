import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: string
    }
}>()

blogRouter.use('/*', async (c, next) => {
    // Steps
    // 1. Get the JWT token from the Authorization header
    // 2. Verify the token
    // 3. Get the user ID from the token
    // 4. Use the user ID to authenticate the request and call next()
    // 5. If header is not correct return 403

    const authHeader = c.req.header("authorization") || "";
    const token = authHeader.split(" ")[1]

    try {
        const user = await verify(token, c.env.JWT_SECRET)

        const userID = user.id as string

        if (user?.id) {
            c.set("userId", userID)
            await next()
        } else {
            c.status(403)
            return c.json({ error: "Unauthorized User, Make Sure You Are Logged In!" })
        }
    } catch (error) {
        c.status(403)
        return c.json({ error: "Unauthorized User, Make Sure You Are Logged In!" })
    }

})

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const userId = c.get("userId")

    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId
        }
    })

    return c.json({
        id: blog.id
    })
})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const userId = c.get("userId")

    const blog = await prisma.post.update({
        where: {
            id: body.id,
            authorId: userId
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })

    return c.json({
        id: blog.id
    })
})


// Todo: add pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany()

    return c.json({ blogs: blogs })
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const id = c.req.param("id")

    const blog = await prisma.post.findFirst({
        where: {
            id: id
        }
    })

    return c.json({
        blog: blog
    })
})
