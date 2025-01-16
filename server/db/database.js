//import mysql from 'mysql';
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'meetings'
});
 
connection.connect( error => {
  if (error) console.log('Connessione al DB-Server fallita!'); //throw error;
  console.log('Connessione al DB-Server OK!');
});

module.exports = connection;
//export default database;