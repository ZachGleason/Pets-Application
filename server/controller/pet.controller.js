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
						messege: err,
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
					messege: err,
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
					messege: err,
				});
				throw err;
			} else {
				res.status(200).json({
					data: result,
				});
			}
		});
	},

	// add a new pet
	addNew: (req, res) => {
		let query =
			"INSERT INTO Pets (name, age, breed, parents_name, allergies, notes, type_id, users_id, birth, rescue_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?); ";

		connection.query(
			query,
			[
				req.body.name,
				req.body.age,
				req.body.breed,
				req.body.parents_name,
				req.body.allergies,
				req.body.notes,
				req.body.type_id,
				req.body.users_id,
				req.body.birth,
				req.body.rescue_date,
			],
			(err, result) => {
				if (err) {
					res.status(201).json({
						status: "error",
						messege: err,
					});
					throw err;
				} else {
					res.status(201).json({
						data: result,
						messege: "Action successful!",
					});
				}
			}
		);
	},

	// set media for a pet
	setMedia: (req, res) => {
		let query = "UPDATE Pets SET media = ? WHERE id = ?;";
		connection.query(query, [req.body.media, req.params.id], (err, result) => {
			if (err) {
				res.status(201).json({
					status: "error",
					messege: err,
				});
				throw err;
			} else {
				res.status(201).json({
					data: result,
					messege: "success",
				});
			}
		});
	},

	updateOneById: (req, res) => {
		// (name, age, breed, parents_name, allergies, notes, type_id, users_id, birth, rescue_date)
		let query =
			"UPDATE Pets SET name = ?, age = ?, breed = ?, parents_name = ?, allergies = ?, notes = ?, type_id = ?, users_id = ?, birth = ?, rescue_date = ? WHERE id = ?;";
		connection.query(
			query,
			[
				req.body.name,
				req.body.age,
				req.body.breed,
				req.body.parents_name,
				req.body.allergies,
				req.body.notes,
				req.body.type_id,
				req.body.users_id,
				req.body.birth,
				req.body.rescue_date,
				req.params.id,
			],
			(err, result) => {
				if (err) {
					res.status(201).json({
						status: "error",
						messege: err,
					});
					throw err;
				} else {
					res.status(201).json({
						data: result,
						messege: "success",
					});
				}
			}
		);
	},

	deleteOneById: (req, res) => {
		let query = "DELETE FROM Pets WHERE id = ?;";
		connection.query(query, [req.params.id], (err, result) => {
			if (err) {
				res.status(200).json({
					status: "error",
					messege: err,
				});
				throw err;
			} else {
				res.status(200).json({
					data: result,
					messege: "success",
				});
			}
		});
	},
};
