import Vehicle from "../Models/Vehicle"
import { VehicleType } from "../Types/Vehicle"
import HolidayService from "./HolidayService"
import DateTime from "../Models/DateTime"

export default class {
	constructor(private holidays: HolidayService) {}
	public ChargeTollFee = (vehicle: Vehicle, date: DateTime) => {
		if (vehicle.isEnvironmental()) {
			console.log("Vehicle is environmental")
			return 0
		}
		if (this.holidays.isHoliday(date)) {
			console.log("The date is a holiday")
			return 0
		}
		if (vehicle.type() === VehicleType.Car) {
			const hour = date.getHours()
			console.log(hour)
		}
		return 60
	}
}
