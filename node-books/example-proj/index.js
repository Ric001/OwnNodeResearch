'use strict'
//Piping Streams of data compressed from source to destiny
const fs = require('fs')
const zlib = require('zlib')
const gzip = zlib.createGzip()
const outputStream = fs.createWriteStream('output.js.gz')

const answer = fs.createReadStream('./node-stream.js')
    .pipe(gzip)
    .pipe(outputStream)

if (answer) 
    console.log('Everything went just fine')

// Server Side Programming

const http = require('http')
const port = 8080

const server = http.createServer((req, res) => {
    res.end('More than words')
})

server.listen(port, () => {
    console.log('Server listening on: http://localhost:%s', port)
})

//Programming with Express
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Express web app on localhost:3000')
})