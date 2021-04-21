// Set up default listening port
import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/user.js'
import groupRouter from './routes/group.js'
import groupUserRouter from './routes/groupUsers.js'
import taskRouter from './routes/task.js'
import messageRouter from './routes/message.js'

// All routes are documented in their controller directories
// ALL KEYS FROM RETURNED JSON ARE IN LOWERCASE

const PORT = 8080;

// init app
let app = express();

app.use(bodyParser.json());

app.use('/api/user', userRouter);
app.use('/api/group', groupRouter);
app.use('/api/groupUser', groupUserRouter);
app.use('/api/task', taskRouter);
app.use('/api/message', messageRouter);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
