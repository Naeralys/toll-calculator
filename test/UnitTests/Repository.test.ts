import Vehicle from "../../src/Models/Vehicle"
import { Car } from "../../src/Models/Vehicles"
import Repository from "../../src/Repositories/Repository"

describe("repository", () => {
	const repository = new Repository<Vehicle>()
	const car = new Car()
	it("adding an item", () => {
		repository.add(car)
		expect(repository.get(car)).toBe(car)
	})
	it("getting a car", () => {
		expect(repository.get(car)).toBe(car)
	})
	it("getting all the cars", () => {
		expect(repository.getAll()).toStrictEqual([car])
	})
})
