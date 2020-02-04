import TolledCarsRepo from "../../src/Repositories/TolledCarsRepo"
import Car from "../../src/Models/Vehicles/Car"
import DateTime from "../../src/Models/DateTime"
import { TolledVehicleRecord } from "../../src/Types"

describe("tolled cars repository", () => {
	const tolledCarsRepo = new TolledCarsRepo()
	const vehicle = new Car()
	const date = new DateTime(new Date(2020, 2, 3, 10, 0, 0, 0))
	const expectedRecord = { vehicle, date, fee: 20 } as TolledVehicleRecord
	it("adding a tolled vehicle record", () => {
		tolledCarsRepo.addTolledVehicle(vehicle, date, 20)
		const records = tolledCarsRepo.getAll()
		expect(records).toStrictEqual([expectedRecord])
	})
	it("getting records for the selected date", () => {
		const records = tolledCarsRepo.getDailyCarRecords(vehicle, date)
		expect(records).toStrictEqual([expectedRecord])
	})
})
