import mysql from "mysql2/promise"
//Step1. connect to mysql server
const db = await mysql.createConnection ({
    host: "localhost",
    user :"ritik",
    password: "argusadmin",
    database: 'url_shortener_mysql',
 
});
console.log("my sql connected")



//STEP 2: Create a database
// await db.execute(`create database mysql_db`)
// console.log(await db.execute("show databases"))


//STEP 3. Create a table
await db.execute(`
  CREATE TABLE url_shortener_mysql (
  id INT AUTO_INCREMENT PRIMARY KEY,
  short_code VARCHAR(20) NOT NULL UNIQUE,
  url VARCHAR(255) NOT NULL)`)


//Step 4. perform CRUD operation on table

//insert
// await db.execute(`insert into users(username, email) values ('ritik','negiritik47@gmail.com')`)

//using prepared statements 
// await db.execute(`insert into users(username, email) values(?,?)`,[
//   "negi",
//   "sharma@kk.com",
// ]);

// const values =[
//   ["Alice", "alice@example.com"],
//   ["Bob", "bob@example.com"],
//   ["Charlie", "charlie@example.com"],
//   ["David", "david@example.com"],
//   ["Emma","emma@example.com"]
// ]

// await db.query("insert into users(username, email) values ? ",
//   [values]
// )



//read
// const [rows] = await db.execute(`select * from users`);
// console.log(rows);


//update 
// try{
// const [rows] = await db.execute(
//   "UPDATE users SET username = ? WHERE email = ?",
//   ['negir', 'ritik@gmail.com']
// );} catch(error){
//   console.error(error)
// }


//delete
// try{
// const [rows] = await db.execute(
//   "DELETE FROM users WHERE email = ?",
//   ['ritik@gmail.com']
// );} catch(error){
//   console.error(error)
// }