import { DateTime } from "../../src/Models"
import { Car } from "../../src/Models/Vehicles"
import { HolidayService, TollService } from "../../src/Services"

describe("toll regular car type", () => {
	const vehicle = new Car()
	const holiday = new DateTime(new Date(2020, 2, 2, 10, 0, 0, 0))
	const holidays = new HolidayService([holiday])
	const tollService = new TollService(holidays)
	const date = new DateTime(new Date(2020, 2, 3, 10, 0, 0, 0))
	const rushHour = new DateTime(new Date(2020, 2, 3, 8, 0, 0, 0))
	it("calculate toll fee on a holiday", () => {
		const fee = tollService.calculateTollFee(vehicle, holiday)
		expect(fee).toBe(0)
	})
	it("calculate toll fee on regular day", () => {
		const fee = tollService.calculateTollFee(vehicle, date)
		expect(fee).toBe(12)
	})
	it("calculate toll fee on rush hour", () => {
		const fee = tollService.calculateTollFee(vehicle, rushHour)
		expect(fee).toBe(18)
	})
	it("calculate toll fee for max fee limit", () => {
		vehicle.setCurrentFee(65)
		vehicle.setNewLatestTollTime(date)
		const fee = tollService.calculateTollFee(vehicle, date)
		expect(fee).toBe(60)
	})
})
