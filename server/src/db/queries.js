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
    insertGroups: values => ({
        name: 'insert-groups',
        text: `INSERT INTO Groups (groupName)
               VALUES ($1) RETURNING groupid;`,
        values,
    }),
    getGroupsForUser: values => ({
        name: 'get-groups-for-user',
        text: `SELECT groupID, userEmail FROM GroupUsers
               WHERE userEmail = ?, active = TRUE;`,
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
               WHERE userEmail = ?;`,
        values,
    }),
    getMessageFromGroup: values => ({
        name: 'get-message-from-group',
        text: `SELECT userEmail, body, timeSent FROM Message
               WHERE groupID = ?;`,
        values,
    }),
    getTaskFromGroup: values => ({
        name: 'get-task-from-group',
        text: `SELECT task, status, userEmail, createTime FROM TASK
               WHERE groupID = ? AND active = TRUE;`,
        values,
    }),
    getReplyFromMessage: values => ({
        name: 'get-reply-from-message',
        text: `SELECT userEmail, body, timeSent FROM Reply
               WHERE messageID = ?;`,
        values,
    }),
}