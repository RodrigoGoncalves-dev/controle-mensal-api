
import mysql, { ConnectionOptions } from "mysql2/promise";
const access: ConnectionOptions = {
  host: "localhost",
  user: "root",
  password: "",
  database: "controle_mensal"
};

const connect = mysql.createConnection(access);

export default connect;