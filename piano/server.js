const express = require('express')
const path = require('path')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const startIO = require('../common/js/io')

const DIST_DIR = path.join(__dirname, 'dist')

startIO(io)

app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

http.listen(3000, () => {
  console.log('listening on http://localhost:3000')
})
