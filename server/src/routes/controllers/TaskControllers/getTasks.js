import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// GET request
// Format:
// url params: :groupID:Groups.groupID
// return [JSON]: task:[{taskID, groupID, task, status, userEmail, createTime, active}] - list of tasks within the group
export async function getTasksFromGroup(req, res) {
    const taskID = req.params.taskID;

    const taskQuery = await db.query(queries.getTasksFromGroup([groupID]));
    const { rows: tasks } = taskQuery;

    res.json({tasks});
}

// GET request
// Format:
// url params: :taskID:Task.taskID
// return [JSON]: task:{taskID, groupID, task, status, userEmail, createTime, active} - task from taskID
export async function getTaskFromId(req, res) {
    const taskID = req.params.taskID;

    const taskQuery = await db.query(queries.getTaskFromID([taskID]));
    const task = taskQuery.rows[0];

    res.json({task});
}

export default { getTasksFromGroup,
                 getTaskFromId,};
