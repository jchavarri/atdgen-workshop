const Bundler = require('parcel-bundler')
const Server = require('./src/Server.bs.js')

const app = require('express')()
const bundler = new Bundler('index.html', {})

app.get('/events/', async (req, res) => {
  let events = await Server.fetch()
  console.log(events);
  res.status(200).json({ message: "hello world" })
})

app.use(bundler.middleware())

const listener = app.listen(8000, () => {
  console.log('Serving at http://localhost:' + listener.address().port)
})