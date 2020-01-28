import DateTime from "../../src/Models/DateTime"
import { TimeGrading } from "../../src/Types/TimeGrading"

describe("dateTime", () => {
	const dateTime = new DateTime(new Date(2020, 2, 2, 9, 0, 0))
	it("hourly type returns the hour type of high", () =>
		expect(dateTime.getHourlyTimeType()).toBe(TimeGrading.High))
})
