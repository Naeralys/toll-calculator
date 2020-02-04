import DateTime from "../../src/Models/DateTime"
import { Motorcycle } from "../../src/Models/Vehicles"
import getFeeFromTimeGrading from "../../src/Utils/getFeeFromTimeGrading"
import isTollFreeVehicle from "../../src/Utils/isTollFreeVehicle"
import isWithinSameDay from "../../src/Utils/isWithinSameDay"
import isWithinSameHour from "../../src/Utils/isWithinSameHour"

describe("unit testing the utility module", () => {
	const tollFreeVehicle = new Motorcycle()
	const aDate = new DateTime(new Date(2020, 2, 3, 10, 0, 0, 0))
	const bDate = new DateTime(new Date(2020, 2, 3, 10, 50, 0, 0))

	it("getFeeFromTimeGrading", () => {
		expect(getFeeFromTimeGrading(aDate)).toBe(12)
	})
	it("isTollFreeVehicle, reversed", () => {
		expect(isTollFreeVehicle(tollFreeVehicle)).toBeFalsy()
	})
	it("isWithinSameDay", () => {
		expect(isWithinSameDay(aDate, bDate)).toBeTruthy()
	})
	it("isWithinSameHour", () => {
		expect(isWithinSameHour(aDate, bDate)).toBeTruthy()
	})
})
