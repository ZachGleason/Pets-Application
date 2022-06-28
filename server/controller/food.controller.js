const { connection } = require("../config/mysql.config");

module.exports = {
	getAll: (req, res) => {
		let query = "SELECT * FROM Foods;";
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
		let query = "SELECT * FROM Foods WHERE id = ?;";
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
		let query = "SELECT * FROM Foods WHERE pets_id = ?;";
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
		let query = "DELETE FROM Foods WHERE id = ?;";
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
			"INSERT INTO Foods (type, brand, portion, notes, pets_id) VALUES (?, ?, ?, ?, ?);";

		let args = [
			req.body.type,
			req.body.brand,
			req.body.portion,
			req.body.notes,
			req.body.pets_id,
		];

		connection.query(query, args, (err, result) => {
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

	updateById: (req, res) => {
		let query =
			"UPDATE Foods SET type = ?, brand = ?, portion = ?, notes = ?, pets_id = ? WHERE id = ?;";

		let args = [
			req.body.type,
			req.body.brand,
			req.body.portion,
			req.body.notes,
			req.body.pets_id,
			req.params.id,
		];

		connection.query(query, args, (err, result) => {
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
};
