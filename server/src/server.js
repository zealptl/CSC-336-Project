// Set up default listening port
import express from 'express'
import bodyParser from 'body-parser'
import http from 'http';
import { Server } from 'socket.io';

import userRouter from './routes/user.js';
import groupRouter from './routes/group.js';
import groupUserRouter from './routes/groupUsers.js';
import taskRouter from './routes/task.js';
import messageRouter from './routes/message.js';
import authRouter from './routes/auth.js';

// Import utils
import { getFromattedGroups, subscribeUser, unsubscribeUser } from './utils/groups.js';
import { sendMessage, sendReply } from './utils/message.js';
import { formatGroup, formatMessage } from './utils/format.js';

import path from 'path'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// All routes are documented in their controller directories
// ALL KEYS FROM RETURNED JSON ARE IN LOWERCASE

const PORT = 8080;

// init app
let app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ["GET", "POST"]
    }
});

io.on('connection', client => {
    // Expected format of message:{groupID, body}
    client.on('message', message => {
        console.log(message)
        sendMessage(client.id, message);
        client
            .to(formatGroup(message.groupID))
            .emit('messageReceived', formatMessage(client.id, message));
    });
    
    // Expected format of reply:{replyTo, message:{groupID, body}}
    client.on('reply', reply => {
        console.log("AM REPLY");
        sendReply(client.id, reply);
        client
            .to(formatGroup(reply.message.groupID))
            .emit('replyReceived', formatMessage(client.id, reply));
    });
    
    client.on('joinChat', userEmail => {
        getFromattedGroups(userEmail)
            .then(groups => client.join(groups));
            
        subscribeUser(client.id, userEmail);
    });
    
    client.on('disconnect', () => {
        unsubscribeUser(client.id);
    });
});

//app.use(express.static(path.join(__dirname, 'testhtml')));

app.use(bodyParser.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/group', groupRouter);
app.use('/api/groupUser', groupUserRouter);
app.use('/api/task', taskRouter);
app.use('/api/message', messageRouter);
app.use('/api/auth', authRouter);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
