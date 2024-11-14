import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>()


app.post('/api/v1/user/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const response = await prisma.user.create({
    data:{
      name: body.name,
      email: body.email,
      password: body.password
    }
  })

  return c.text('signup');
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('signin');
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
