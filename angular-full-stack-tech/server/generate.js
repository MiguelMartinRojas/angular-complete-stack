var faker = require('faker');

var database = { products: []};

for (var i = 1; i<= 300; i++) {
  var productName = faker.commerce.productName();
  database.products.push({
    id: i,
    name: productName,
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/800x600/?" + productName,
    quantity: faker.random.number()
  });
}

console.log(JSON.stringify(database));