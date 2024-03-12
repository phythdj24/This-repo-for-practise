import express from "express";
import http from 'http'
import path from "path";
import { fileURLToPath } from 'url'; // Import fileURLToPath from 'url'
import { Server } from "socket.io";

const __filename = fileURLToPath(import.meta.url); // Get the current file's URL
const __dirname = path.dirname(__filename); // Extract the directory name

const app = express()
const server = http.createServer(app)

const io = new Server(server)

//Socket Io
io.on('connection', (client)=>{
    
})

app.get('/',(req,res)=>{
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
    // Use path.join to create the correct path to index.html
})

app.use(express.static(path.resolve('./public')))

server.listen(9000, ()=>{
    console.log(`server is Running On ${9000}`);
})
