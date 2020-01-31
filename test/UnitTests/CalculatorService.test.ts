import { DateTime } from "../../src/Models"
import {
	getFeeFromTimeGrading,
	isWithinSameDay,
	isWithinSameHour
} from "../../src/Services/CalculatorService"
import { TimeGrading } from "../../src/Types"

describe("calculatorservice", () => {
	const aDateTime = new DateTime(new Date(2020, 2, 3, 10, 0, 0, 0))
	const bDateTime = new DateTime(new Date(2020, 2, 3, 10, 0, 0, 0))
	it("date is within the same day", () =>
		expect(isWithinSameDay(aDateTime, bDateTime)).toBeTruthy())
	it("date is within the same hour", () =>
		expect(isWithinSameHour(aDateTime, bDateTime)).toBeTruthy())
	it("time is of low grading", () => {
		const lowGradedTime = new DateTime(new Date(2020, 2, 3, 2, 0, 0, 0))
		expect(getFeeFromTimeGrading(lowGradedTime)).toBe(8)
	})
	it("time is of middle grading", () => {
		const middleGradedTime = new DateTime(new Date(2020, 2, 3, 10, 0, 0, 0))
		expect(getFeeFromTimeGrading(middleGradedTime)).toBe(12)
	})
	it("time is rush hour", () => {
		const rushHour = new DateTime(new Date(2020, 2, 3, 8, 0, 0, 0))
		expect(getFeeFromTimeGrading(rushHour)).toBe(18)
	})
})
