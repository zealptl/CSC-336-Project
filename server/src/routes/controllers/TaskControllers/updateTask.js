import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// PATCH request
// Format:
// url params: :taskID:Task.taskID
// body: {currentStatus:Status, task:string}
// Status: 'To Do', 'In Progress', 'Done'
// return [JSON]: {successful} - successful or not
export async function updateTask(req, res) {
    const taskID = req.params.taskID;
    const { task, currentStatus } = req.body;

    const updatedTask = await db.query(queries.updateTask([taskID, task, currentStatus]));

    res.json({successful: true});
}

export default updateTask;
