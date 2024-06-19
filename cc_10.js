//U81623325
document.addEventListener('DOMContentLoaded', function() {
    d3.csv('data/purchase_orders.csv').then(function(data) {
        const ul = d3.select('#purchase-orders-list');

        data.forEach(function(order) {
            ul.append('li')
              .text(`${order.customerName} - Order ID: ${order.orderId} - Purchase Amount: ${order.purchaseAmount}`);
        });
    }).catch(function(error) {
        console.error('Error loading the CSV file:', error);
    });
});