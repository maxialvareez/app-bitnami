const express = require('express');
const {verifyToken, isModerator, isAdmin} = require('../middleware/authJwt');
const router = express.Router();
const gastoController = require('../controllers/gasto.controller');

router.get('/', [verifyToken], gastoController.getGastos); // Dar permisos a todos como arreglos TODO, EN ORDEN EL ARREGLO CON EL AUTHJWT
router.get('/:id', verifyToken, gastoController.getGasto);
router.post('/', verifyToken, gastoController.createGasto);
router.put('/:id', verifyToken, gastoController.editGasto);
router.delete('/:id', [verifyToken,isModerator,isAdmin], gastoController.deleteGasto);

module.exports = router;