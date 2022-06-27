const mysql = require('mysql')
const crypto = require('crypto')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root', // note, for OSX users, this may have to be changed to rootroot, or whatever you put for your password
    database: 'pets-application-db'
})

module.exports = {

    createUser: (req, res) => {
        console.log('Hit /api/user/create endpoint')
        console.log(req.body)
        const firstname = req.body.firstname
        const lastname =  req.body.lastname
        const email =  req.body.email
        const password = req.body.password

        //TODO use crypto to create hash

        db.connect( (err) => {
            if (err) {
                console.log("Error connecting")
                console.log(err)
                res.status(500).send(err)
            }
            db.query('insert into users (firstname, lastname, email, password_hash) values (?,?,?,?)', 
                [firstname, lastname, email, password],
                (err, result) => {
                    if (err) {
                        console.log("Error in /create")
                        res.status(500).send(err)
                    } else {
                        console.log("Values inserted")
                        res.json(result)
                    }
                }
            )
        })
    },

    getUsers: (req, res) => {
        console.log('hit /api/user/users endpoint')

        db.connect( (err) => {
            if (err) {
                console.log("Error connecting")
                console.log(err)
                res.status(500).send(err)
            }
            db.query('select * from users',
                (err, result) => {
                    if (err) {
                        res.status(500).send(err)
                    } else {
                        res.json(result)
                    }
                }    
            )
        })
    },

    // getUserById: (req, res) => {
    //     console.log('hit /api/user/:id endpoint')
    
    //     db.connect( (err) => {
    //         if (err) {
    //             console.log("Error connecting")
    //             console.log(err)
    //             res.status(500).send(err)
    //         }
    //         db.query('select * from users where id=?',req.params.id,
    //             (err, result) => {
    //                 if (err) {
    //                     res.status(500).send(err)
    //                 } else {
    //                     res.json(result)
    //                 }
    //             }    
    //         )
    //         db.end( (err) => {
    //             if (err){
    //                 console.log("Error! ending conn" + err)
    //             }
    //         })
    //     })
    // },

    getUserById: (req, res) => {
        console.log('hit /api/user/:id endpoint')
    
        db.query('select * from users where id=?',req.params.id,
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
        console.log('hit /api/user/id endpoint')

        let sqlQuery = `update users
                        set firstname = ?,
                            lastname = ?,
                            email = ?,
                            password_hash = ?
                        where id = ?;`
    
        db.query(
            sqlQuery, [req.body.firstname, req.body.lastname,
                req.body.email, req.body.password_hash, req.params.id],
            (err, result) => {
                if (err) {
                    res.status(500).send(err)
                }else{
                    res.json(result)
                }
        })
    },

    deleteUserById: (req, res) => {
        console.log('hit /api/user/id endpoint')
        console.log("id: " + req.params.id)
        
        const sql = "delete from users where id = ?"
        db.query(sql, req.params.id, (err, result) => {
            if (err){
                res.status(500).send(err)
            } else {
                res.json(result)
            }
        })
    }
}