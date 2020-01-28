import DateTime from "../Models/DateTime"
import Vehicle from "../Models/Vehicle"
import { TimeGrading } from "../Types"
import HolidayService from "./HolidayService"

export default class {
	constructor(private holidays: HolidayService) {}

	public ChargeTollFee = (vehicle: Vehicle, date: DateTime) => {
		if (vehicle.isEnvironmental()) return 0
		if (this.holidays.isHoliday(date)) return 0
		return this.getTimeGrading(date)
	}

	private getTimeGrading = (date: DateTime) => {
		switch (date.getHourlyTimeType()) {
			case TimeGrading.Low:
				return 8
			case TimeGrading.Middle:
				return 12
			case TimeGrading.High:
				return 18
		}
	}
}
