import { DateTime } from "../../src/Models"
import { Car } from "../../src/Models/Vehicles"
import { HolidayService, TollService } from "../../src/Services"

describe("toll regular car type", () => {
	const vehicle = new Car()
	const holiday = new DateTime(new Date(2020, 2, 2, 10, 0, 0, 0))
	const holidays = new HolidayService([holiday])
	const date = new DateTime(new Date(2020, 2, 3, 10, 0, 0, 0))
	const rushHour = new DateTime(new Date(2020, 2, 3, 8, 0, 0, 0))
	it("calculate toll fee on a holiday", () => {
		const tollService = new TollService(holidays)
		const fee = tollService.calculateTollFee(vehicle, holiday)
		expect(fee).toBe(0)
	})
	it("calculate toll fee on regular day", () => {
		const tollService = new TollService(holidays)
		const fee = tollService.calculateTollFee(vehicle, date)
		expect(fee).toBe(12)
	})
	it("calculate toll fee on rush hour", () => {
		const tollService = new TollService(holidays)
		const fee = tollService.calculateTollFee(vehicle, rushHour)
		expect(fee).toBe(18)
	})
	it("calculate toll fee for max fee limit", () => {
		const tollService = new TollService(holidays)
		let fee = tollService.calculateTollFee(vehicle, date)
		fee = fee + tollService.calculateTollFee(vehicle, date)
		fee =
			fee +
			tollService.calculateTollFee(vehicle, new DateTime(new Date(2020, 2, 3, 1, 0, 0, 0)))
		fee =
			fee +
			tollService.calculateTollFee(vehicle, new DateTime(new Date(2020, 2, 3, 2, 0, 0, 0)))
		fee =
			fee +
			tollService.calculateTollFee(vehicle, new DateTime(new Date(2020, 2, 3, 3, 0, 0, 0)))
		fee =
			fee +
			tollService.calculateTollFee(vehicle, new DateTime(new Date(2020, 2, 3, 4, 0, 0, 0)))
		fee =
			fee +
			tollService.calculateTollFee(vehicle, new DateTime(new Date(2020, 2, 3, 5, 0, 0, 0)))
		fee =
			fee +
			tollService.calculateTollFee(vehicle, new DateTime(new Date(2020, 2, 3, 6, 0, 0, 0)))
		expect(fee).toBe(60)
	})
})
