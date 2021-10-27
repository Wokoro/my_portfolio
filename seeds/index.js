const faker = require('faker');

const UserModel = require('../models/user');
const { hashPassword } = require('../utils');

const currentUser = {
    username: 'default',
    email: 'user@gmail.com',
    address: 'sample user address',
    password: hashPassword('password'),
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
        sex: ['male', 'female'][i % 2],
        password: hashPassword('password')
    })
}

var data = [currentUser, ...seededData]

const seedDB = async () => {
    await UserModel.deleteMany({});
    await UserModel.insertMany(data);
}

module.exports = seedDB