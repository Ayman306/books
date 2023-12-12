const { Pool } = require('pg');
const pool = new Pool(
    {
        user: 'postgres',
        database: 'test',
        password: '1234',
        port: 5432,
        host: 'localhost',        
    }
)
pool.connect((err) => {
    if (err) { console.log(err) } else {
        console.log("Connectd to db");
    };
})

const createTable = () => {
    const bookTable = `CREATE TABLE IF NOT EXISTS 
    books(
        id SERIAL PRIMARY KEY,
        name VARCHAR(30) NOT NULL,        
    )`;
    pool.query(bookTable).then((res) => {
        console.log(res);
        pool.end();
    })
        .catch((err) => {
            console.log(err);
            pool.end()
        });
};
createTable();
module.exports = pool;