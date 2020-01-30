import { DateTime, Vehicle } from "../../src/Models"
import { HolidayService, TollService } from "../../src/Services"
import { VehicleType } from "../../src/Types"

describe("toll regular car type", () => {
	const vehicle = new Vehicle(VehicleType.Car)
	const holiday = new DateTime(new Date(2020, 2, 2, 10, 0, 0, 0))
	const holidays = new HolidayService([holiday])
	const tollService = new TollService(holidays)
	const date = new DateTime(new Date(2020, 2, 3, 10, 0, 0, 0))
	it("charge car on a holiday", () => {
		const fee = tollService.calculateTollFee(vehicle, holiday)
		expect(vehicle.toll(fee, holiday)).toBe(0)
	})
	it("charge car on regular day", () => {
		const fee = tollService.calculateTollFee(vehicle, date)
		expect(vehicle.toll(fee, date)).toBe(12)
	})
	it("charge car within the same hour", () => {
		const fee = tollService.calculateTollFee(vehicle, date)
		vehicle.toll(fee, date)

		const withinTheHour = new DateTime(new Date(2020, 2, 3, 10, 50, 0, 0))
		vehicle.toll(fee, withinTheHour)

		expect(vehicle.getCurrentFee()).toBe(fee)
	})
	it("charge car within the same hour, highest fee", () => {
		vehicle.toll(10, date)

		const withinTheHour = new DateTime(new Date(2020, 2, 3, 10, 50, 0, 0))
		vehicle.toll(12, withinTheHour)

		expect(vehicle.getCurrentFee()).toBe(12)
	})
	it("charge car within the same hour, highest fee reversed", () => {
		vehicle.toll(12, date)

		const withinTheHour = new DateTime(new Date(2020, 2, 3, 10, 50, 0, 0))
		vehicle.toll(10, withinTheHour)

		expect(vehicle.getCurrentFee()).toBe(12)
	})
	it("max fee limit", () => {
		vehicle.toll(31, date)

		const nextHour = new DateTime(new Date(2020, 2, 3, 12, 0, 0, 0))
		vehicle.toll(31, nextHour)

		const fee = vehicle.getCurrentFee()
		expect(fee).toBe(60)
	})
})
