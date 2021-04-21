import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// PATCH request
// Format:
// url params: :taskID:Task.taskID
// body: {status:Status, task:string}
// Status: 'To Do', 'In Progress', 'Done'
// return [JSON]: {successful} - successful or not
export async function updateTask(req, res) {
    const taskID = req.params.taskID;
    const { task, status } = req.body;

    const updatedTask = await db.query(queries.updateTask([taskID, task, status]));

    res.json({successful: true});
}

export default updateTask;
