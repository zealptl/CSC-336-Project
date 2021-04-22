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
import { sendMessage } from './utils/message.js';
import { formatGroup, formatMessage } from './utils/format.js';

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
        sendMessage(client.id, message);
        io
            .to(formatGroup(message.groupID))
            .emit('message', formatMessage(client.id, message));
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

app.use(bodyParser.json());

app.use('/api/user', userRouter);
app.use('/api/group', groupRouter);
app.use('/api/groupUser', groupUserRouter);
app.use('/api/task', taskRouter);
app.use('/api/message', messageRouter);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
