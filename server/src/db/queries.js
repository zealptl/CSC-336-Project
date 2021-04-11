// Default list of common queries
export default {
    getUsers: `SELECT ? FROM Users;`,
    insertUsers: `INSERT INTO Users (email, firstName, lastName, password, active)
                  VALUES (?, ?, ?, ?, ?);`,
    getGroups: `SELECT ? FROM Groups;`,
    insertGroups: `INSERT INTO Groups (groupName, active)
                   VALUES (?, ?);`,
    getGroupsForUser: `SELECT groupID, userEmail FROM GroupUsers
                       WHERE userEmail = ?, active = TRUE;`,
    getMessageFromUser: `SELECT groupID, body, timeSent FROM Message
                         WHERE userEmail = ?;`,
    getMessageFromGroup: `SELECT userEmail, body, timeSent FROM Message
                          WHERE groupID = ?;`,
    getTaskFromGroup: `SELECT task, status, userEmail, createTime FROM TASK
                       WHERE groupID = ? AND active = TRUE;`,
    getReplyFromMessage: `SELECT userEmail, body, timeSent FROM Reply
                          WHERE messageID = ?;`,
}