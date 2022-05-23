const db = require("./db");
const bcrypt = require("bcrypt");

/**Creates an admin acct
 username: admin
 password: admin1
*/


async function _insertIntoDB(){
  adminPass = await bcrypt.hash("admin1", 1);
  console.log("adminPass " + adminPass);

  let admin = 
  ["admin", "fn1", "ln1", "email1", "phone1", adminPass, true];
  
  await db.query(
    `INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    admin );
}

async function _deleteAdmin(){
  const result = await db.query(
    'DELETE FROM users WHERE username = $1 RETURNING username',
       ['admin'] );
}

_insertIntoDB();

//Delete admin acct
//_deleteAdmin();
