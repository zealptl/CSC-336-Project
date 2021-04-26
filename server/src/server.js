// Set up default listening port
import express from 'express'
import bodyParser from 'body-parser'
import http from 'http';
import { Server } from 'socket.io';

import userRouter from './routes/user.js'
import groupRouter from './routes/group.js'
import groupUserRouter from './routes/groupUsers.js'
import taskRouter from './routes/task.js'
import messageRouter from './routes/message.js'

// Import utils
import { getFromattedGroups, subscribeUser, unsubscribeUser } from './utils/groups.js';
import { sendMessage, sendReply } from './utils/message.js';
import { formatGroup, formatMessage } from './utils/format.js';

import path from 'path'

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// All routes are documented in their controller directories
// ALL KEYS FROM RETURNED JSON ARE IN LOWERCASE

const PORT = 8080;

// init app
let app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', client => {
    // Expected format of message:{groupID, body}
    client.on('message', message => {
        console.log(message)
        sendMessage(client.id, message);
        io
            .to(formatGroup(message.groupID))
            .emit('messageReceived', formatMessage(client.id, message));
    });
    
    // Expected format of reply:{replyTo, message:{groupID, body}}
    client.on('reply', reply => {
        console.log("AM REPLY");
        sendReply(client.id, reply);
        io 
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

app.use(express.static(path.join(__dirname, 'testhtml')));

app.use(bodyParser.json());

app.use('/api/user', userRouter);
app.use('/api/group', groupRouter);
app.use('/api/groupUser', groupUserRouter);
app.use('/api/task', taskRouter);
app.use('/api/message', messageRouter);


server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
