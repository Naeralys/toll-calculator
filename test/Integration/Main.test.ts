import { DateTime, Vehicle } from "../../src/Models"
import { HolidayService, TollService } from "../../src/Services"
import { VehicleType } from "../../src/Types"

describe("toll regular car type", () => {
	const vehicle = new Vehicle(VehicleType.Car)
	const holiday = new DateTime(new Date(2020, 2, 2, 10, 0, 0, 0))
	const holidays = new HolidayService([holiday])
	const tollService = new TollService(holidays)
	const date = new DateTime(new Date(2020, 2, 3, 10, 0, 0, 0))
	it("charge car on a holiday", () =>
		expect(
			vehicle.toll(tollService.ChargeTollFee(vehicle, holiday), holiday.getHourlyTimeType())
		).toBe(0))
})
