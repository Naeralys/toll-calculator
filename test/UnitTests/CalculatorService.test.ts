import { DateTime } from "../../src/Models"
import { isWithinSameDay, isWithinSameHour } from "../../src/Services/CalculatorService"

describe("calculatorservice", () => {
	const aDateTime = new DateTime(new Date(2020, 2, 3, 10, 0, 0, 0))
	const bDateTime = new DateTime(new Date(2020, 2, 3, 10, 0, 0, 0))
	it("date is within the same day", () =>
		expect(isWithinSameDay(aDateTime, bDateTime)).toBeTruthy())
	it("date is within the same hour", () =>
		expect(isWithinSameHour(aDateTime, bDateTime)).toBeTruthy())
})
