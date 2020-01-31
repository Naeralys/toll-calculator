import { Car, Motorcycle } from "../../src/Models/Vehicles"
import { VehicleType } from "../../src/Types"

describe("vehicle of type car", () => {
	const car = new Car()
	it("vehicle is of type car", () => expect(car.getVehicleType()).toBe(VehicleType.Car))
	it("car is not toll free", () => expect(car.isTollFree()).toBeFalsy())
})

describe("vehicle of type motorcycle", () => {
	const motorcycle = new Motorcycle()
	it("vehicle is of type motorcycle ", () =>
		expect(motorcycle.getVehicleType()).toBe(VehicleType.Motorcycle))
	it("motorcycle is toll free", () => expect(motorcycle.isTollFree()).toBeTruthy())
})
