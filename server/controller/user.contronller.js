const { connection } = require("../config/mysql.config");

module.exports = {
	getAllUsers: (req, res) => {
		connection.query("SELECT * FROM Users", (err, result) => {
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
