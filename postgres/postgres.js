  import pg from 'pg'; 
  const { Pool } = pg;

//Step1. connect to mysql server
const pool =new Pool ({
    host: "localhost",
    user :"postgres",
    password: "argusadmin",
    database: 'Employee',
 
});

//step2. create a db

   pool.connect( async (err, client, done) => {
      if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
      }
      console.log('Connected to PostgreSQL database!');

      client.query('SELECT NOW()', (err, res) => {
        done(); // Release the client back to the pool
        if (err) {
          console.error('Error executing query:', err.stack);
          return;
        }
        console.log('Current time from database:', res.rows[0].now);
      });name
      const result = await pool.query("SELECT current_database()");
      console.log(result.rows[0].current_database)
    });



//step3. create a table

// await pool.query(`
//   CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE
// );`)


//step 4. perform CRUD operations 

await pool.query(`
  INSERT INTO users(username,email) VALUES
  ('ritik','negiritik47@gmail.com')`)