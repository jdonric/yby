module.exports = (app) => {
    const orders = require('../controllers/orderController.js');

    // Create a new Order
    app.post('/order', orders.create);

    // Retrieve all Orders
    //app.get('/order', orders.findAll);

    // Retrieve a single Order with OrderId
    app.get('/order/:orderId', orders.findOne);

    // Update a Order with OrderId
    //app.put('/order/:orderId', orders.update);

    // Delete a Order with OrderId
    app.delete('/order/:orderId', orders.delete);
}