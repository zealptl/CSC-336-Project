// Default list of common queries

// These queries act as functions that take in values
// These values MUST be arrays as a list of values
export default {
	getUsers: (values) => ({
		name: 'get-users',
		text: `SELECT * FROM Users WHERE active = TRUE;`,
		values,
	}),
	getUser: (values) => ({
		name: 'get-user',
		text: `SELECT * FROM Users WHERE email = $1 AND active = TRUE;`,
		values,
	}),
	insertUser: (values) => ({
		name: 'insert-user',
		text: `INSERT INTO Users (email, firstName, lastName, password)
               VALUES ($1, $2, $3, $4)
               RETURNING *;
               `,
		values,
	}),
	updatePassword: (values) => ({
		name: 'update-password',
		text: `UPDATE Users SET password = $2
               WHERE email = $1;`,
		values,
	}),
	getGroups: (values) => ({
		name: 'get-groups',
		text: `SELECT * FROM Groups;`,
		values,
	}),
	getGroupsByName: (values) => ({
		name: 'get-groups-by-name',
		text: `SELECT * FROM Groups WHERE groupName = $1;`,
		values,
	}),
	getGroupsByID: (values) => ({
		name: 'get-groups-by-ID',
		text: `SELECT * FROM Groups WHERE groupID = $1;`,
		values,
	}),
	insertGroups: (values) => ({
		name: 'insert-groups',
		text: `INSERT INTO Groups (groupName)
               VALUES ($1) RETURNING groupid;`,
		values,
	}),
	getGroupsForUser: (values) => ({
		name: 'get-groups-for-user',
		text: `SELECT GroupUsers.groupID, groupName FROM GroupUsers
               JOIN Groups ON Groups.groupID = GroupUsers.groupID
               WHERE userEmail = $1 AND GroupUsers.active = TRUE;`,
		values,
	}),
	getUsersForGroup: (values) => ({
		name: 'get-users-for-group',
		text: `SELECT userEmail, firstName, lastName FROM GroupUsers
               JOIN Users ON Users.email = GroupUsers.userEmail
               WHERE groupID = $1 AND GroupUsers.active = TRUE;`,
		values,
	}),
	insertGroupUser: (values) => ({
		name: 'insert-group-user',
		text: `INSERT INTO GroupUsers (groupID, userEmail)
               VALUES ($1, $2);`,
		values,
	}),
	updateGroupUser: (values) => ({
		name: 'update-group-user',
		text: `UPDATE GroupUsers SET active = $3
               WHERE groupID = $1 AND userEmail = $2;`,
		values,
	}),
	getMessagesFromUser: (values) => ({
		name: 'get-message-from-user',
		text: `SELECT * FROM Message
               WHERE Message.userEmail = $1;`,
		values,
	}),
	getMessagesFromGroup: (values) => ({
		name: 'get-message-from-group',
		text: `SELECT * FROM Message
               LEFT JOIN Reply
               ON Message.messageID = Reply.originalMessage
               WHERE groupID = $1;`,
		values,
	}),
	insertMessage: (values) => ({
		name: 'insert-message',
		text: `INSERT INTO Message (userEmail, groupID, body)
               VALUES ($1, $2, $3) RETURNING messageID;`,
		values,
	}),
	getTasksFromGroup: (values) => ({
		name: 'get-tasks-from-group',
		text: `SELECT * FROM Task
               WHERE groupID = $1 AND active = TRUE;`,
		values,
	}),
	getTaskFromID: (values) => ({
		name: 'get-task-from-id',
		text: `SELECT * FROM Task
               WHERE taskID = $1 AND active = TRUE;`,
		values,
	}),
	insertTask: (values) => ({
		name: 'insert-task',
		text: `INSERT INTO Task (groupID, task, currentStatus, userEmail)
               VALUES ($1, $2, $3, $4) RETURNING taskid;`,
		values,
	}),
	updateTask: (values) => ({
		name: 'update-task',
		text: `UPDATE Task SET task = $2, currentStatus = $3
               WHERE taskID = $1;`,
		values,
	}),
	insertReply: (values) => ({
		name: 'insert-reply',
		text: `INSERT INTO Reply (originalMessage, replyMessage)
               VALUES ($1, $2);`,
		values,
	}),
};
