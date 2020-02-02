import { MAX_DAILY_TOLL_FEE } from "../config"
import DateTime from "../Models/DateTime"
import { TolledVehicleRecord } from "../Types"
import isWithinSameDay from "../Utils/isWithinSameDay"
import isWithinSameHour from "../Utils/isWithinSameHour"
import ITolledVehicleRecordService from "./ITolledVehicleRecordService"

export default class implements ITolledVehicleRecordService {
	constructor(private tolledVehicleRecords: TolledVehicleRecord[]) {}
	public isWithinSameDay = (date: DateTime): boolean =>
		isWithinSameDay(this.tolledVehicleRecords[0].date, date)

	public isWithinSameHour = (date: DateTime): boolean =>
		isWithinSameHour(this.tolledVehicleRecords[0].date, date)

	public hasReachedDailyCap = (fee: number): boolean => {
		const totalDailyFees: number = this.tolledVehicleRecords.reduce(
			currentRecord => (fee = currentRecord),
			fee
		)
		return totalDailyFees + fee > MAX_DAILY_TOLL_FEE
	}
	public getHighestHourlyFee = (fee: number, date: DateTime) => 0
}
