const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

module.exports = async (req, res, next) => {
    try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(400).json({message: "No token"});

    const decoded = jwt.verify(token, config.SECRET);

    const user = await User.findById(decoded.id, {password: 0});

    if (!user) return res.status(404).json({message: "Not user find"});

    next();
    } catch(error) {
        return res.status(401).json({message: 'Unauthorized'});
    }
};