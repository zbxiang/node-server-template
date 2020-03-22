const express = require('express')
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.end('Hello World!!!!')
})

const privateKey = fs.readFileSync('./https/test.zbxiangable.xyz.key')
const pem = fs.readFileSync('./https/test.zbxiangable.xyz.pem')
const credentials = {
  key: privateKey,
  cert: pem
}
const httpsServer = https.createServer(credentials, app)

const server = app.listen(5000, function() {
    const { address, port } = server.address()
    console.log('HTTP服务启动成功：http://%s:%s', address, port)
})

httpsServer.listen(18082, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', 18082)
})