import { faker } from "@faker-js/faker";
function createRandomCarList() {
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),

        image: "https://cdn.pixabay.com/photo/2024/01/17/12/06/car-8514314_640.png",
        miles: 1000,
        gearType: 'Automatic',
        price: faker.finance.amount({min: 500000, max: 10000000})
    }
}

const carList = faker.helpers.multiple(createRandomCarList, {
    count: 7
})

export default{carList}