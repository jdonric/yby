const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    customer: String,
    e_address: String,
    item: String,
    flavor: String,
    vegan: Boolean, 

}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);