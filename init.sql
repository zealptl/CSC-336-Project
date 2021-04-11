CREATE DATABASE jira
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Comment out if using your own data
DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Groups CASCADE;
DROP TABLE IF EXISTS GroupUsers;
DROP TABLE IF EXISTS Task;
DROP TABLE IF EXISTS Message CASCADE;
DROP TABLE IF EXISTS Reply;

CREATE TABLE Users (
    email VARCHAR(255) PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    active BOOLEAN DEFAULT TRUE
);

CREATE TABLE Groups (
    groupID SERIAL PRIMARY KEY,
    groupName VARCHAR(255) NOT NULL,
    active BOOLEAN DEFAULT TRUE
);

CREATE TABLE GroupUsers (
    groupID SERIAL REFERENCES Groups (groupID),
    userEmail VARCHAR(255) REFERENCES Users (email),
    active BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (groupID, userEmail)
);

CREATE TABLE Task (
    taskID SERIAL PRIMARY KEY,
    groupID SERIAL REFERENCES Groups (groupID),
    task VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    userEmail VARCHAR(255) REFERENCES Users (email),
    createTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP(0),
    active BOOLEAN DEFAULT TRUE
);

CREATE TABLE Message (
    messageID SERIAL PRIMARY KEY,
    userEmail VARCHAR(255) REFERENCES Users (email),
    groupID SERIAL REFERENCES Groups (groupID),
    body VARCHAR(5000) NOT NULL,
    timeSent TIMESTAMP DEFAULT CURRENT_TIMESTAMP(0)
);

CREATE TABLE Reply (
    replyID SERIAL PRIMARY KEY,
    messageID SERIAL REFERENCES Message (messageID),
    userEmail VARCHAR(255) REFERENCES Users (email),
    body VARCHAR(5000) NOT NULL,
    timeSent TIMESTAMP DEFAULT CURRENT_TIMESTAMP(0)
);

INSERT INTO Users VALUES
    ('yossarian@gmail.com', 'John', 'Yossarian', 'pianosa'),
    ('cathcart@gmail.com', 'Chuck', 'Cathcart', 'doublespeak'),
    ('daneeka@gmail.com', 'Dan', 'Daneeka', 'catch22'),
    ('minderbinder@gmail.com', 'Milo', 'Minderbinder', 'mmenterprises'),
    ('nately@gmail.com', 'Edward', 'Nately', 'sweden');

INSERT INTO Groups (groupName) VALUES
    ('CSc322 Group'),
    ('CSc336 Group'),
    ('CSc472 Group');

INSERT INTO GroupUsers (groupID, userEmail) VALUES
    (1, 'yossarian@gmail.com'),
    (2, 'yossarian@gmail.com'),
    (3, 'yossarian@gmail.com'),
    (1, 'cathcart@gmail.com'),
    (2, 'cathcart@gmail.com'),
    (1, 'daneeka@gmail.com'),
    (2, 'daneeka@gmail.com'),
    (3, 'daneeka@gmail.com'),
    (1, 'minderbinder@gmail.com'),
    (2, 'minderbinder@gmail.com'),
    (3, 'minderbinder@gmail.com'),
    (1, 'nately@gmail.com');

INSERT INTO Task (groupID, task, status, userEmail) VALUES
    (1, 'Add access to all tables on admin page', 'Doing', 'yossarian@gmail.com'),
    (1, 'Reformat menu', 'To Do', 'daneeka@gmail.com'),
    (1, 'Job application forms', 'Done', 'daneeka@gmail.com'),
    (1, 'Write views', 'Done', 'cathcart@gmail.com'),
    (1, 'Create dummy data', 'Doing', 'nately@gmail.com'),
    (1, 'Write models', 'Done', 'minderbinder@gmail.com'),
    (3, 'Write first fragment shader', 'Doing', 'yossarian@gmail.com'),
    (3, 'Write second fragment shader', 'To Do', 'yossarian@gmail.com'),
    (3, 'Write first vertex shader', 'To Do', 'minderbinder@gmail.com'),
    (3, 'Write second vertex shader', 'To Do', 'minderbinder@gmail.com'),
    (3, 'Write resizeGL', 'Done', 'daneeka@gmail.com'),
    (2, 'Client setup', 'Done', 'cathcart@gmail.com'),
    (2, 'Server setup', 'Done', 'yossarian@gmail.com'),
    (2, 'Write CREATE TABLE Scripts', 'Done', 'minderbinder@gmail.com'),
    (2, 'Structure api', 'To Do', 'daneeka@gmail.com');

INSERT INTO Message (userEmail, groupID, body) VALUES
    ('yossarian@gmail.com', 1, 'That''s some catch, that Catch-22.'),
    ('cathcart@gmail.com', 2, 'Haven''t you got anything humorous that stays away from waters and valleys and God?'),
    ('nately@gmail.com', 3, 'Surely there can''t be so many countries worth dying for.');

INSERT INTO Reply (messageID, userEmail, body) VALUES
    (1, 'daneeka@gmail.com', 'It''s the best there is.');
