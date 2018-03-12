const mysql = require('mysql')

const conn = mysql.createConnectio({
    host:'localhost',
    user:'root',
    password:'KeYpZrZx',
    port:'3306',
    database:'user',
})


module.exports = conn

// const pool = mysql.createPool({
//     host:'localhost',
//     user:'',
//     password:'',
//     database:'',
//     port:'',
// })

// const query = function(sql, options, callback){
//     pool.getConnection(function(err, conn){
//         if(err) {
//             callback(err, null, null)
//         } else {
//             conn.query(sql, options, function (err,results, fields) {
//                 conn.release()
//                 callback(err, results, fields)
//             })
//         }
//     })
// }
