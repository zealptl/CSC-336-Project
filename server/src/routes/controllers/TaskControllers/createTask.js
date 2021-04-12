import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// POST request
// Format:
// body: {groupID:Groups.groupID, status:string, userEmail:Users.userEmail, task:string}
// return [JSON]: {createdTaskId} - the id of the newly created task
async function createTask(req, res) {
    const { groupID, task, status, userEmail } = req.body;

    const createdTask = await db.query(queries.insertTask([groupID, task, status, userEmail]));
    const createdTaskId = createdTask.rows[0].taskid;

    res.json({createdTaskId});
}

export default createTask;
