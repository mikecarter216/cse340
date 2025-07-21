const pool = require("../config/db");

async function getAccountByEmail(email) {
  // Mock DB method
  return {
    email: "michaelakpan216@gmail.com",
    password: "mike1",
    firstname: "Michael",
    lastname: "Akpan",
    account_id: 123,
    avatar: null
  };
}

module.exports = {
  getAccountByEmail
};
