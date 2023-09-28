//dev-luisbenavidesandrade

//comment: define variable as data set
//comment: salesOrderHeader
const objectSalesOrdersHeader = {
    0: { orderNumber: 'SO0001', orderCustomer: 'Customer1' },
    1: { orderNumber: 'SO0002', orderCustomer: 'Customer2' },
};

//comment: salesOrderItems
const objectSalesOrdersItems = {
    0: { orderNumber: 'SO0001', orderPosition: 10, itemMaterial: 'material01', itemQuantity: 5, itemUnitPrice: 7.5   },
    1: { orderNumber: 'SO0001', orderPosition: 20, itemMaterial: 'material02', itemQuantity: 15, itemUnitPrice: 3  },
    2: { orderNumber: 'SO0002', orderPosition: 10, itemMaterial: 'material01', itemQuantity: 7, itemUnitPrice: 7.5  },
    3: { orderNumber: 'SO0002', orderPosition: 20, itemMaterial: 'material02', itemQuantity: 21, itemUnitPrice: 3  },
};

// comment: perform inner join
const joinedData = {};


for (const key in objectSalesOrdersItems) {
    
    //coment: step1 get iten object 
    const item = objectSalesOrdersItems[key];
    const orderNumber = item.orderNumber;

    console.log('\ndev-log: step1 \n');
    console.log('\ndev-log: ' + key + '\n');
    console.log('\ndev-log: ' + typeof item + '\n');
    console.log('\ndev-log: ' + JSON.stringify(item) + '\n');
    console.log('\ndev-log: ' + typeof orderNumber + '\n');
    console.log('\ndev-log: ' + JSON.stringify(orderNumber) + '\n');

    if (!joinedData[orderNumber]) {
        joinedData[orderNumber] = {};
    }

    if (!joinedData[orderNumber].items) {
        joinedData[orderNumber].items = {};
    }

    joinedData[orderNumber].items[item.orderPosition] = item;

    delete joinedData[orderNumber].items[item.orderPosition]['orderNumber'];
    delete joinedData[orderNumber].items[item.orderPosition]['orderPosition'];

}

console.log('\ndev-log: ' + JSON.stringify(joinedData) + '\n');

// Add header data to the joined records
for (const key in objectSalesOrdersHeader) {
    const headerItem = objectSalesOrdersHeader[key];
    const orderNumber = headerItem.orderNumber;

    if (joinedData[orderNumber]) {
        joinedData[orderNumber] = { ...headerItem, items: joinedData[orderNumber].items };
    }
}

console.log('\ndev-log: ' + JSON.stringify(joinedData) + '\n');