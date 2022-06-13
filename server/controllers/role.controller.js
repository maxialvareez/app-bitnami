const Role = require('../models/Role');
const roleController = {};

roleController.ROLES = ["user", "moderator", "admin"];

module.exports = roleController;