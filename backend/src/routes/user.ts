import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@100xdevs/medium-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    }
}>()

// Routes
userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = signinInput.safeParse(body)

    if (!success) {
        c.status(400)
        return c.json({ message: 'Invalid request' })
    }

    try {
        const user = await prisma.user.create({
            data: {
                name: body.name,
                username: body.username,
                password: body.password
            }
        })
        console.log("After connection");
        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.text(token)

    } catch (error) {
        console.log(error)
    }
})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = signupInput.safeParse(body)

    if (!success) {
        c.status(400)
        return c.json({ message: 'Invalid request' })
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password
            },
            select: {
                id: true
            }
        })

        if (!user) {
            c.status(404)
            return c.text('User Not Found!');
        }

        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.text(token)
    } catch (error) {
        console.log(error);
    }

})
