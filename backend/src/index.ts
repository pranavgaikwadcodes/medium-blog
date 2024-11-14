import { Hono } from 'hono'

const app = new Hono()


app.post('/api/v1/user/signup', (c) => {
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
