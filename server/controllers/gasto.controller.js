const Gasto = require('../models/Gasto');
const gastoController = {};

gastoController.getGastos = async (req, res) =>{
    const gastos = await Gasto.find();
    res.json(gastos);
};

gastoController.getGasto = async (req, res) =>{
   const gasto = await Gasto.findById(req.params.id);
   res.status(200).json(gasto);
};

gastoController.createGasto = async (req, res) => {
    const gasto = new Gasto(req.body);
    await gasto.save();
    res.status(201).json(gasto);
}

gastoController.editGasto = async (req,res) => {
    const gasto = {
        name: req.body.name,
        total: req.body.total,
        done: req.body.done
    };
    await Gasto.findByIdAndUpdate(req.params.id, {$set: gasto}, {new: true});
    res.status(204).json(gasto);
}

gastoController.deleteGasto = async (req, res) => {
    await Gasto.findByIdAndDelete(req.params.id);
    res.status(204).json();
}

module.exports = gastoController;