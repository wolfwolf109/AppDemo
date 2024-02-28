const bcrypt = require("bcrypt");
const User = require("./userModel");
// require database connection 
const dbConnect = require("./db-connect");
const express = require('express')
const app = express()

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