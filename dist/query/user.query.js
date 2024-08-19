"use strict";
class UserQuery {
}
UserQuery.createUser = `INSERT INTO users 
    SET (name, email, password) 
    VALUES (?, ?, ?)
    `;
UserQuery.getUser = `SELECT * FROM users WHERE id = ?`;
