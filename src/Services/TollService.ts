import { MAX_DAILY_TOLL_FEE } from "../config"
import DateTime from "../Models/DateTime"
import Vehicle from "../Models/Vehicle"
import { getFeeFromTimeGrading, isWithinSameDay } from "./CalculatorService"
import HolidayService from "./HolidayService"

export default class {
	constructor(private holidays: HolidayService) {}
	public calculateTollFee = (vehicle: Vehicle, date: DateTime): number => {
		if (vehicle.isTollFree()) return 0
		if (this.holidays.isHoliday(date)) return 0

		const fee = getFeeFromTimeGrading(date)
		if (isWithinSameDay(vehicle.getLatestTollTime(), date)) {
			if (vehicle.getCurrentFee() + fee > MAX_DAILY_TOLL_FEE) {
				return MAX_DAILY_TOLL_FEE
			}
		}
		return fee
	}

	/*
	 * TODO: Implement the actual charging service
	 */

	// public chargeTollFee = (vehicle: Vehicle, fee: number, date: DateTime) => {
	// 	if (isWithinSameHour(vehicle.getLatestTollTime(), date)) {
	// 		if (fee > vehicle.getCurrentFee()) {
	// 			vehicle.setCurrentFee(fee)
	// 		}
	// 	} else {
	// 		vehicle.setNewLatestTollTime(date)
	// 	}
	// }
}
