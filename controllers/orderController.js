const Order = require('../models/orderModel.js');

// Create and Save a new Order
exports.create = (req, res) => {
    // Validate request
    if(!req.body.e_address) {
        return res.status(400).render({
        message: "Ordes must include an email address"
        });
    }

    // Create an Order
    const order = new Order({
        customer: req.body.customer || "Customer", 
        e_address: req.body.content,
        item: req.body.item,
        flavor: req.body.flavor,
        vegan:req.body.vegan
    });

    // Save Order in the database
    order.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error submitting order."
        });
    });
};




// Retrieve and return all Orders from the database.
exports.findAll = (req, res) => {
    Order.find()
    .then( orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving order info."
        });
    });
};



// Find a single Order with a orderId
exports.findOne = (req, res) => {
    Order.findById(req.params._id)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });            
        }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Order with id " + req.params.orderId
        });
    });
};



// Update a Order identified by the orderId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.item) {
        return res.status(400).send({
            message: "Item option can not be empty"
        });
    }

    // Find Order and update it with the request body
    Order.findByIdAndUpdate(req.params.orderId, {
        title: req.body.title || "Untitled Order",
        content: req.body.content
    }, {new: true})
    .then(Order => {
        if(!Order) {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });
        }
        res.send(Order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            message: "Error updating Order with id " + req.params.orderId
        });
    });
};



// Delete a Order with the specified orderId in the request
exports.delete = (req, res) => {
    Order.findByIdAndRemove(req.params.orderId)
    .then(Order => {
        if(!Order) {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });
        }
        res.send({message: "Order deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Order with id " + req.params.orderId
        });
    });
};