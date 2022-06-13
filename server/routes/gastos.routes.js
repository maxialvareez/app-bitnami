const express = require('express');
const verifyToken = require('../middleware/authJwt');
const router = express.Router();
const gastoController = require('../controllers/gasto.controller');

router.get('/', verifyToken, gastoController.getGastos);
router.get('/:id', verifyToken, gastoController.getGasto);
router.post('/', verifyToken, gastoController.createGasto);
router.put('/:id', verifyToken, gastoController.editGasto);
router.delete('/:id', verifyToken, gastoController.deleteGasto);

module.exports = router;