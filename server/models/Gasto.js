const mongoose = require('mongoose');

const { Schema } = mongoose;

const gastoSchema = new Schema({
    name: { type: String, required: true },
    total: { type: Number, required: true },
    done: { type: Boolean }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Gasto', gastoSchema);
