const { connection } = require("../config/mysql.config");

module.exports = {
	// get a list of all pets
	// for admin account use (if there is one)
	getAll: (req, res) => {
		connection.query(
			"SELECT Pets.*, Type.name as type_name FROM Pets JOIN Type ON Type.id = Pets.type_id;",
			(err, result) => {
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
			}
		);
	},

	// get a pet by id
	getById: (req, res) => {
		let query =
			"SELECT Pets.*, Type.name as type_name FROM Pets JOIN Type ON Type.id = Pets.type_id WHERE Pets.id = ?;";
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

	// get a list of a user's pet
	getByUser: (req, res) => {
		let query =
			"SELECT Pets.*, Type.name as type_name FROM Pets JOIN Type ON Type.id = Pets.type_id WHERE users_id = ?;";
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

	addNew: (req, res) => {
		let query =
			"INSERT INTO Pets (name, age, breed, parents_name, allergies, notes, type_id, users_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?); ";
    
    connection.query(query, [req.body.name, req.body.age, req.body.breed])
	},
};
