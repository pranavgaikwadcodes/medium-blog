import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()

// Middleware
app.use('/api/v1/blog/*', async (c, next) => {
  // Steps
  // 1. Get the JWT token from the Authorization header
  // 2. Verify the token
  // 3. Get the user ID from the token
  // 4. Use the user ID to authenticate the request and call next()
  // 5. If header is not correct return 403

  const header = c.req.header("authorization") || "";
  const token = header.split(" ")[1]
  const response = await verify(token, c.env.JWT_SECRET)

  if( response.id ) {
    next()
  } else {
    c.status(403)
    return c.json({ error: "Unauthorized User"})
  }
})

// Routes
app.post('/api/v1/user/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.create({
    data:{
      name: body.name,
      email: body.email,
      password: body.password
    }
  })

  const token = await sign({ id: user.id }, c.env.JWT_SECRET)
  return c.json({
    jwt: token
  })
})

app.post('/api/v1/user/signin', async (c) => {  
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
      password: body.password
    },
    select: {
      id: true
    }
  })

  if(!user) {
    c.status(404)
    return c.text('User Not Found!');
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET)
  return c.json({
    jwt: token
  })

})

app.post('/api/v1/blog', (c) => {
  return c.text('Create blog');
})

app.put('/api/v1/blog', (c) => {
  return c.text('update Blog')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Get blog by id')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Get all blogs')
})


export default app
