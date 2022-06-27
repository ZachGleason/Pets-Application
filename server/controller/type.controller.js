const { connection } = require("../config/mysql.config");

module.exports = {
  getAllType : (req, res) => {
    connection.query("SELECT * FROM Type;", (err, result) => {
      if (err) {
        res.status(200).json({
          status : 'error',
          message : err
        })
      } else {
        res.status(200).json({
          data : result
        })
      }
    })
  }
}