const bcrypt = require("bcrypt");
const User = require("./user-model");
// require database connection 
const dbConnect = require("./db-connect");
const express = require('express')
const app = express()
const jwt = require("jsonwebtoken");
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// execute database connection 
dbConnect();

app.post("/register", (request, response) => {
    bcrypt.hash(request.body.password, 10)
        .then((hashedPassword) => {
            const user = new User({
                email: request.body.email,
                password: hashedPassword,
            });
            user.save().then((result) => {
                response.status(201).send({
                    message: "User Created Successfully",
                    result,
                });
            })
                .catch((error) => {
                    response.status(500).send({
                        message: "Error creating user",
                        error,
                    });
                });
        })
        .catch((e) => {
            response.status(500).send({
                message: "Password was not hashed successfully",
                e,
            });
        })
});

app.post('/login', (req, res)=> {
    User.findOne({email: req.body.email})
    .then()
    .catch((e)=> {
        res.status(404).send({
            message: "Email not found",
            e,
        })
    })
})

app.listen(port, () => {
    console.log(`App Demo listening on port ${port}`)
  })