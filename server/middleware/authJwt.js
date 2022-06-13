const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');
const Role = require('../models/Role');


module.exports = {
    verifyToken: async function(req, res, next) {
        try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(400).json({message: "No token"});

        const decoded = jwt.verify(token, config.SECRET);
        req.UserId = decoded.id;

        const user = await User.findById(req.UserId, {password: 0});

        if (!user) return res.status(404).json({message: "Not user find"});

        next();
        } catch(error) {
            return res.status(401).json({message: 'Unauthorized'});
        }
    }, 
    isModerator: async function(req, res, next) {
        const user = await User.findById(req.UserId);
        const roles = await Role.find({_id:{$in: user.roles}});

        for(let i = 0; i< roles.lenght; i++){
            if (roles[i].name === "moderator"){
                next();
                return;
            }
        }

        return res.status(403).json({message: 'Require Moderator role'});
    },
    isAdmin: async function(req, res, next){
        const user = await User.findById(req.UserId);
        const roles = await Role.find({_id:{$in: user.roles}});

        for(let i = 0; i< roles.lenght; i++){
            if (roles[i].name === "admin"){
                next();
                return;
            }
        }

        return res.status(403).json({message: 'Require Admin role'});

    }
};