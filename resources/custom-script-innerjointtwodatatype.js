//dev-luisbenavidesandrade

const salesOrdersHeader = {
    0: { orderNumber: 'SO0001', orderCustomer: 'Customer1' },
    1: { orderNumber: 'SO0002', orderCustomer: 'Customer2' },
};
const salesOrdersItems = {
    0: { orderNumber: 'SO0001', orderPosition: 10 },
    1: { orderNumber: 'SO0001', orderPosition: 20 },
    2: { orderNumber: 'SO0002', orderPosition: 10 },
    3: { orderNumber: 'SO0002', orderPosition: 20 },
};

const outputObjct = Object.assign(salesOrdersItems, salesOrdersHeader);

console.log(outputObjct);

