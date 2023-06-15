const express = require('express');
const newUserSchema = require('../models/user')

const router_user = express.Router();

router_user.post("/users", (req, res) => {
    const user = newUserSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json(({message: error})));
});

module.exports = router_user;