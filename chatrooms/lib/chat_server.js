const socketio = require('socket.io')
let io
let gestNumber = 1
let nickNames = {}
let namesUsed = []
let currentRoom = {}