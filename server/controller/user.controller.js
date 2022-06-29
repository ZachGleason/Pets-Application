const { connection } = require("../config/mysql.config");
const crypto = require('crypto')

module.exports = {

    registerUser: (req, res) => {
        console.log('Hit registerUser endpoint')
        console.log(req.body)

        let salt = crypto.randomBytes(8).toString('hex')
        let password_hash = crypto.createHash('sha256').update(req.body.password + salt).digest('hex')

        let sql = 'insert into users (firstname, lastname, email, password, salt) values (?,?,?,?,?)'
        let args = [req.body.firstname, req.body.lastname, req.body.email, password_hash, salt]
        
        connection.query(sql, args,
            (err, result) => {
                if (err) {
                    console.log("Error in /create")
                    res.status(500).send(err)
                } else {
                    console.log("Values inserted")
                    res.status(201).json(result)
                }
            }
        )
    },

    loginUser: (req, res) => {
        console.log("Hit loginUser endpoint")
        console.log(req.body)

        let sql = `select password, salt from users
                    where email = ?`

        connection.query(sql, req.body.email,
            (err, result) => {
                if (err) {
                    console.log(err)
                }else{
                    password = result[0].password
                    salt = result[0].salt

                    let password_hash = crypto.createHash('sha256').update(req.body.password + salt).digest('hex')
                    let message = ''
                    let code = ''
                    if (password_hash === password){
                        message = 'the two passwords match!'
                        code = 200
                    } else {
                        message = 'wrong password'
                        code = 401
                    }

                    res.status(code).json({ message: message })
                }
            }
        )
    },

    getUsers: (req, res) => {
        console.log('hit getUsers endpoint')
        let sql = 'select * from users'

        connection.query(sql,
            (err, result) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.json(result)
                }
            }    
        )
    },

    getUserById: (req, res) => {
        console.log('hit getUserById endpoint')
        let sql = 'select * from users where id=?'

        connection.query(sql, req.params.id,
            (err, result) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.json(result)
                }
            }    
        )
    },

    updateUserById: (req, res) => {
        console.log('hit updateUserById endpoint')

        const salt = crypto.randomBytes(8).toString('hex')
        const password_hash = crypto.createHash('sha256').update(req.body.password + salt).digest('hex')

        let sqlQuery = `update users
                        set firstname = ?,
                            lastname = ?,
                            email = ?,
                            password = ?
                        where id = ?;`
        let args = [req.body.firstname, req.body.lastname, req.body.email, password_hash, req.params.id]

        connection.query(sqlQuery, args,
            (err, result) => {
                if (err) {
                    res.status(500).send(err)
                }else{
                    res.json(result)
                }
        })
    },
    
    deleteUserById: (req, res) => {
        console.log('hit deleteUser endpoint')

        let sql = "delete from users where id = ?"

        connection.query(sql, req.params.id, (err, result) => {
            if (err){
                res.status(500).send(err)
            } else {
                res.json(result)
            }
        })
    }
}