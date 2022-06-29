const mysql = require("mysql");
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "rootroot",
	database: "petproject",
});

module.exports = {
	connection : connection
}
