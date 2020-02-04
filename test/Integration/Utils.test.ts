import DateTime from "../../src/Models/DateTime"
import Car from "../../src/Models/Vehicles/Car"
import HolidayService from "../../src/Services/HolidayService"
import TollService from "../../src/Services/TollService"

describe("testing the use of various utilities", () => {
	const vehicle = new Car()
	const holidays = new HolidayService([])
	const date = new DateTime(new Date(2020, 2, 3, 10, 0, 0, 0))
	const rushHour = new DateTime(new Date(2020, 2, 3, 8, 0, 0, 0))
	it("adding a holiday", () => {
		const tollService = new TollService(holidays)
		const holiday = new DateTime(new Date(2020, 2, 2, 10, 0, 0, 0))
		tollService.holidayService().addHoliday(holiday)
		const fee = tollService.calculateTollFee(vehicle, holiday)
		expect(fee).toBe(0)
	})
})
