const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const detect = require('detect-port')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const defaultPort = 3000

async function startServer() {
  try {
    // Detect available port starting from defaultPort
    const port = await detect(defaultPort)
    
    if (port !== defaultPort) {
      console.log(`Port ${defaultPort} is in use, using port ${port} instead.`)
    }

    const app = next({ dev, hostname, port })
    const handle = app.getRequestHandler()

    await app.prepare()

    createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true)
        await handle(req, res, parsedUrl)
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
      }
    })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
      if (port !== defaultPort) {
        console.log(`> Note: Default port ${defaultPort} was in use`)
      }
    })
  } catch (err) {
    console.error('Error starting server:', err)
    process.exit(1)
  }
}

startServer()
