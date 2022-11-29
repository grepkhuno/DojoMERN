const express = require('express')
const app = express()
const PORT = 8000

const { faker } = require('@faker-js/faker');

/////////////////////////////////////////
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
const newFakeProduct = createProduct();
// console.log(newFakeProduct);
///////////////////////////////    
const createUser = () => {
    return {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone_number: faker.phone.number(),

    }
}
const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipcode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  });

app.listen(PORT, () => {
    console.log(`Server is up and running ${PORT}`)
})

app.get('/api/users/new', (req, res) => {
    // console.log(req)
    const user = createUser()
    res.json(user)
})

app.get('/api/companies/new', (req, res)=>{
    const company = createCompany()
    res.json(user)

})
app.get('/api/user/company', (req, res)=>{
    const user = createUser()
    const company = createCompany()
    const responseObject = {
        user: user,
        company: company,
      };
      res.json(responseObject);

})