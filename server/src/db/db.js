import pg from 'pg'

const { Client } = pg;

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'jira',
    password: null,
    port: 5432,
});

const dbq = {
    query: async function(text, values) {
        client.connect();
        return client.query(text, values)
            .then(res => res)
            .catch(e => {throw e})
            .finally(() => client.end());
    }
}

export default dbq;