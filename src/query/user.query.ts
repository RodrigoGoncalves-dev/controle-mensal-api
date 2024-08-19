class UserQuery {
  public static createUser: string = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)
    `;

  public static getUser: string = `SELECT * FROM users WHERE id = ?`;
}

export default UserQuery