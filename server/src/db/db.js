import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const queryDB = async (sql, values) => {

  const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  let mainResults = {};

  mainResults.all = () => {
    return new Promise((resolve, reject) => {
      conn.query(sql, values, (err, results) => {
        if(err) {
          return reject(err)
        };
        return resolve(results);
      });
      conn.end();
    })
  }

  return mainResults;
};

export default queryDB;