//const mysql = require('mysql2/promise');
const mariadb = require('mariadb');
const config = require('./config');



// async function query(sql, params) {
//   const connection = await mysql.createConnection(config.db);
//   const [results, ] = await connection.execute(sql, params);

//   return results;
// }


const getAllUsers = async  () => {

  const connection = await mariadb.createConnection(config.db);

    console.log("getting user");

    let result = await connection.query('select * from users');

    delete result.meta;

    console.log(result);

    

    connection.end();


    // connection.connect(function(err) {
    //   if (err) throw err;
    //   console.log("Connected!");
    //   connection.query('select * from users', function (err, result) {
    //     if (err) throw err;
    //     console.log("Result: " + result);
    //   });
    // }); 
    //  connection.connect( async function(err) {
    //     if (err) {
    //       return console.error('error: ' + err.message);
    //     }
      
    //     console.log('Connected to the MySQL server.');

        
    //     // query to the database and get the records
    //      await connection.query('select * from users', function (err, recordset) {
            
    //         if (err) console.log(err)

    //         // send records as a response
    //         return recordset;
            
    //     });

        

    //   });

}

//getAllUsers();


module.exports = {
  getAllUsers
}