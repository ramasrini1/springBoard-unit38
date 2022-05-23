const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");


/** return signed JWT for payload {username, admin}. */

// function createToken(username, admin=false) {
//   console.log("Admin flag in createToken " + admin);
//   let payload = {username, admin};
//   return jwt.sign(payload, SECRET_KEY);
// }


/** return signed JWT for payload {username, admin}. */

function createToken(username, admin=false) {
  let payload = {username, admin};
  return jwt.sign(payload, SECRET_KEY);
}


module.exports = createToken;