// Default list of common queries

// These queries act as functions that take in values
// These values MUST be arrays as a list of values
const getUsers = values => ({
    name: 'get-user',
    text: `SELECT * FROM Users;`,
    values,
});

const insertUsers = values => ({
    name: 'get-user',
    text: `INSERT INTO Users (email, firstName, lastName, password, active)
           VALUES ($1, $2, $3, $4, $5);`,
    values,
});

const getGroups = values => ({
    name: 'get-groups',
    text: `SELECT * FROM Groups;`,
    values,
});

const insertGroups = values => ({
    name: 'get-groups',
    text: `INSERT INTO Groups (groupName, active)
           VALUES ($1, $2);`,
    values,
});

const getGroupsForUser = values => ({
    name: 'get-groups',
    text: `SELECT groupID, userEmail FROM GroupUsers
           WHERE userEmail = ?, active = TRUE;`,
    values,
});

const getMessageFromUser = values => ({
    name: 'get-groups',
    text: `SELECT groupID, body, timeSent FROM Message
           WHERE userEmail = ?;`,
    values,
});

const getMessageFromGroup = values => ({
    name: 'get-groups',
    text: `SELECT userEmail, body, timeSent FROM Message
           WHERE groupID = ?;`,
    values,
});

const getTaskFromGroup = values => ({
    name: 'get-groups',
    text: `SELECT task, status, userEmail, createTime FROM TASK
           WHERE groupID = ? AND active = TRUE;`,
    values,
});

const getReplyFromMessage = values => ({
    name: 'get-groups',
    text: `SELECT userEmail, body, timeSent FROM Reply
           WHERE messageID = ?;`,
    values,
});

export default {
    getUsers,
    insertUsers,
    getGroups,
    insertGroups,
    getGroupsForUser,
    getMessageFromUser,
    getMessageFromGroup,
    getTaskFromGroup,
    getReplyFromMessage,
}