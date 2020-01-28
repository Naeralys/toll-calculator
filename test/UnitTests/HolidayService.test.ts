import { DateTime } from "../../src/Models"
import { HolidayService } from "../../src/Services"

describe("holidayservice", () => {
	const dates = [new DateTime(new Date(2020, 1, 4, 14, 15, 0, 0))]
	const falseHoliday = new DateTime(new Date(2020, 1, 5, 14, 15, 0, 0))
	const holidayService = new HolidayService(dates)
	it("is not a holiday", () => expect(holidayService.isHoliday(falseHoliday)).toBeFalsy())
	it("is a holiday", () => expect(holidayService.isHoliday(dates[0])).toBe(true))
})
