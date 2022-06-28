const { connection } = require("../config/mysql.config");

module.exports = {
	getAll: (req, res) => {
		let query = "SELECT * FROM Medications;";
		connection.query(query, (err, result) => {
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

	getById: (req, res) => {
		let query = "SELECT * FROM Medications WHERE id = ?;";
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

	getByPet: (req, res) => {
		let query = "SELECT * FROM Medications WHERE pets_id = ?;";
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

	deleteById: (req, res) => {
		let query = "DELETE FROM Medications WHERE id = ?;";
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

	addNew: (req, res) => {
		let query =
			"INSERT INTO Medications (name, dosage, frequency, notes, pets_id) VALUES (?, ?, ?, ?, ?);";

		connection.query(
			query,
			[
				req.body.name,
				req.body.dosage,
				req.body.frequency,
				req.body.notes,
				req.body.pets_id,
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

	updateById: (req, res) => {
		// (name, dosage, frequency, notes, pets_id)
		let query =
			"UPDATE Medications SET name = ?, dosage = ?, frequency = ?, notes = ?, pets_id = ? WHERE id = ?;";
		connection.query(
			query,
			[
				req.body.name,
				req.body.dosage,
				req.body.frequency,
				req.body.notes,
				req.body.pets_id,
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
};
