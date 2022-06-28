const { connection } = require("../config/mysql.config");

module.exports = {
	getAllType: (req, res) => {
		connection.query("SELECT * FROM Type;", (err, result) => {
			if (err) {
				res.status(200).json({
					status: "error",
					message: err,
				});
        throw err;
			} else {
				res.status(200).json({
					data: result,
				});
			}
		});
	},

	addNewType: (req, res) => {
		let query = "INSERT INTO Type (name) VALUES (?);";
		connection.query(query, [req.body.name], (err, result) => {
			if (err) {
				res.status(201).json({
					status: "error",
					message: err,
				});
        throw err;
			} else {
				res.status(201).json({
					data: result,
				});
			}
		});
	},

	editTypeById: (req, res) => {
		let query = "UPDATE Type SET name = ? WHERE id = ?;";
		connection.query(query, [req.body.name, req.params.id], (err, result) => {
			if (err) {
				res.status(201).json({
					status: "error",
					message: err,
				});

        throw err;
			} else {
				res.status(201).json({
					data: result,
				});
			}
		});
	},

	deleteTypeById: (req, res) => {
		let query = "DELETE FROM Type WEHRE id = ?;";
		connection.query(query, [req.params.id], (err, result) => {
			if (err) {
				res.status(200).json({
					status: "error",
					message: err,
				});
        throw err;
			} else {
				res.status(200).json({
					data: result,
				});
			}
		});
	},
};
