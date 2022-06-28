// USE MILITARY TIME AS FORM INPUTS FOR FULLY FUNCTIONING
const { connection } = require("../config/mysql.config");
const foodController = require("../controller/food.controller");

module.exports = {
	getAll: (req, res) => {
		let query = "SELECT * FROM Tasks ORDER BY time;";
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
		let query = "SELECT * FROM Tasks WHERE id = ?;";
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
		let query = "SELECT * FROM Tasks WHERE pets_id = ? ORDER BY time;";
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
		let query = "DELETE FROM Tasks WHERE id = ?;";
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
			"INSERT INTO Tasks (name, time, frequency, isDaily, isCompleted, pets_id) VALUES (?, ?, ?, ?, ?, ?);";

		let args = [
			req.body.name,
			req.body.time,
			req.body.frequency,
			req.body.isDaily,
			req.body.isCompleted,
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
			"UPDATE Tasks SET name = ?, time = ?, frequency = ?, isDaily = ?, isCompleted = ?, pets_id = ? WHERE id = ?;";

		let args = [
			req.body.name,
			req.body.time,
			req.body.frequency,
			req.body.isDaily,
			req.body.isCompleted,
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
