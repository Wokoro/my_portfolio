const faker = require('faker');

const UserModel = require('../models/user');

const currentUser = {
    username: 'user@gmail.com',
    email: 'user@gmail.com',
    address: 'sample user address',
    contact_number: '(695) 583-6536',
    sex: 'male'
}

var seededData = [];

for (let i = 0; i < 20; i++) {
    seededData.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        contact_number: faker.phone.phoneNumber(),
        sex: ['male', 'female'][i % 2]
    })
}

var data = [currentUser, ...seededData]

const seedDB = async () => {
    await UserModel.deleteMany({});
    await UserModel.insertMany(data);
}

module.exports = seedDB