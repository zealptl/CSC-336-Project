import pg from 'pg'

const { Client } = pg;

const client = new Client({
    user: 'NICK',
    host: 'I NEED',
    database: 'THE',
    password: 'DB INFO',
    port: 3211,
});

client.connect();

const dbq = {
    query: function(text, values, cb) {
        client.query(text, values, function(err, result) {
            done();
            cb(err, result);
        })
    }
}

export default dbq;