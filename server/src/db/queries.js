// Default list of common queries

// These queries act as functions that take in values
// These values MUST be arrays as a list of values
export default {
    getUsers: values => ({
        name: 'get-user',
        text: `SELECT * FROM Users;`,
        values,
    }),
    insertUsers: values => ({
        name: 'insert-user',
        text: `INSERT INTO Users (email, firstName, lastName, password, active)
               VALUES ($1, $2, $3, $4, $5);`,
        values,
    }),
    getGroups: values => ({
        name: 'get-groups',
        text: `SELECT * FROM Groups;`,
        values,
    }),
    getGroupsByName: values => ({
        name: 'get-groups-by-name',
        text: `SELECT * FROM Groups WHERE groupName = $1;`,
        values,
    }),
    getGroupsByID: values => ({
        name: 'get-groups-by-ID',
        text: `SELECT * FROM Groups WHERE groupID = $1;`,
        values,
    }),
    insertGroups: values => ({
        name: 'insert-groups',
        text: `INSERT INTO Groups (groupName)
               VALUES ($1) RETURNING groupid;`,
        values,
    }),
    getGroupsForUser: values => ({
        name: 'get-groups-for-user',
        text: `SELECT groupID, userEmail FROM GroupUsers
               WHERE userEmail = $1, active = TRUE;`,
        values,
    }),
    insertGroupUser: values => ({
        name: 'insert-group-user',
        text: `INSERT INTO GroupUsers (groupID, userEmail)
               VALUES ($1, $2);`,
        values,
    }),
    getMessageFromUser: values => ({
        name: 'get-message-from-user',
        text: `SELECT groupID, body, timeSent FROM Message
               WHERE userEmail = $1;`,
        values,
    }),
    getMessageFromGroup: values => ({
        name: 'get-message-from-group',
        text: `SELECT userEmail, body, timeSent FROM Message
               WHERE groupID = $1;`,
        values,
    }),
    getTasksFromGroup: values => ({
        name: 'get-tasks-from-group',
        text: `SELECT * FROM Task
               WHERE groupID = $1 AND active = TRUE;`,
        values,
    }),
    getTaskFromID: values => ({
        name: 'get-task-from-id',
        text: `SELECT * FROM Task
               WHERE taskID = $1 AND active = TRUE;`,
        values,
    }),
    insertTask: values => ({
        name: 'insert-task',
        text: `INSERT INTO Task (groupID, task, status, userEmail)
               VALUES ($1, $2, $3, $4) RETURNING taskid;`,
        values,
    }),
    updateTask: values => ({
        name: 'update-task',
        text: `UPDATE Task SET task = $2, status = $3
               WHERE taskID = $1;`,
        values,
    }),
    getReplyFromMessage: values => ({
        name: 'get-reply-from-message',
        text: `SELECT userEmail, body, timeSent FROM Reply
               WHERE messageID = $1;`,
        values,
    }),
}
