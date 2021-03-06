DROP DATABASE IF EXISTS sira;

CREATE DATABASE sira
    WITH
    OWNER = postgres
    ENCODING = 'UTF8';

-- Connect to the sira database
\c sira;

-- Comment out if using your own data
DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Groups CASCADE;
DROP TABLE IF EXISTS GroupUsers;
DROP TABLE IF EXISTS Task;
DROP TABLE IF EXISTS Message CASCADE;
DROP TABLE IF EXISTS Reply CASCADE;

DROP TYPE IF EXISTS STATUS;
CREATE TYPE STATUS as ENUM ('To Do', 'In Progress', 'Done');

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
    currentStatus STATUS NOT NULL,
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
    originalMessage SERIAL REFERENCES Message (messageID),
    replyMessage SERIAL REFERENCES Message (messageID)
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

INSERT INTO Task (groupID, task, currentStatus, userEmail) VALUES
    (1, 'Add access to all tables on admin page', 'In Progress', 'yossarian@gmail.com'),
    (1, 'Reformat menu', 'To Do', 'daneeka@gmail.com'),
    (1, 'Job application forms', 'Done', 'daneeka@gmail.com'),
    (1, 'Write views', 'Done', 'cathcart@gmail.com'),
    (1, 'Create dummy data', 'In Progress', 'nately@gmail.com'),
    (1, 'Write models', 'Done', 'minderbinder@gmail.com'),
    (3, 'Write first fragment shader', 'In Progress', 'yossarian@gmail.com'),
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
    ('daneeka@gmail.com', 1, 'It''s the best there is.'),
    ('cathcart@gmail.com', 2, 'Haven''t you got anything humorous that stays away from waters and valleys and God?'),
    ('nately@gmail.com', 3, 'Surely there can''t be so many countries worth dying for.');

INSERT INTO Reply (originalMessage, replyMessage) VALUES
    (1, 2);
