import { MAX_DAILY_TOLL_FEE } from "../config"
import DateTime from "../Models/DateTime"
import Vehicle from "../Models/Vehicle"
import TolledCarsRepo from "../Repositories/TolledCarsRepo"
import { TolledVehicleRecord } from "../Types"
import getFeeFromTimeGrading from "../Utils/getFeeFromTimeGrading"
import isTollFreeVehicle from "../Utils/isTollFreeVehicle"
import HolidayService from "./HolidayService"
import ITollService from "./ITollService"
import TolledCarRecordService from "./TolledVehicleRecordService"

export default class implements ITollService {
	private tolledCarsRepo: TolledCarsRepo = new TolledCarsRepo()
	constructor(private holidays: HolidayService) {}
	public calculateTollFee = (vehicle: Vehicle, date: DateTime): number => {
		if (isTollFreeVehicle(vehicle)) return 0
		if (this.holidays.isHoliday(date)) return 0

		const tolledVehicleRecords: TolledVehicleRecord[] = this.tolledCarsRepo.getDailyCarRecords(
			vehicle,
			date
		)

		let fee = getFeeFromTimeGrading(date)

		if (tolledVehicleRecords) {
			const tolledCarRecordService = new TolledCarRecordService(tolledVehicleRecords)
			if (tolledCarRecordService.isWithinSameDay(date)) {
				if (tolledCarRecordService.hasReachedDailyCap(fee)) fee = 0
				else {
					if (tolledCarRecordService.isWithinSameHour(date))
						fee = tolledCarRecordService.getHighestHourlyFee(fee, date)
				}
			}
		}

		this.tolledCarsRepo.addTolledVehicle(vehicle, date, fee)

		return fee
	}
}
