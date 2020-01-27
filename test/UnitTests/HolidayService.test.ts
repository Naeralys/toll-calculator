import HolidayService from "../../src/Services/HolidayService"
import DateTime from "../../src/Models/DateTime"

describe("holidayservice", () => {
	const dates: DateTime[] = [new DateTime(new Date(2020, 1, 4, 14, 15, 0, 0))]
	const falseHoliday: DateTime = new DateTime(new Date(2020, 1, 5, 14, 15, 0, 0))
	const holidayService: HolidayService = new HolidayService(dates)
	it("is not a holiday", () => expect(holidayService.isHoliday(falseHoliday)).toBeFalsy())
	it("is a holiday", () => expect(holidayService.isHoliday(dates[0])).toBe(true))
})
