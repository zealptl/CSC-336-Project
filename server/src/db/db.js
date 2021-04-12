import pg from 'pg'

const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sira',
    password: null,
    port: 5432,
});

const dbq = {
    query: async function(query) {
        const client = await pool.connect();
        try {
            return await client.query(query);
        } catch (err) {
            throw err;
        } finally {
            client.release();
        }
    }
}

export default dbq;