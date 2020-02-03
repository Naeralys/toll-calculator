import DateTime from "../Models/DateTime"

export default interface ITolledVehicleRecordService {
	isWithinSameDay: (date: DateTime) => boolean
	isWithinSameHour: (date: DateTime) => boolean
	hasReachedDailyCap: (fee: number) => boolean
	getHighestHourlyFee: (fee: number, date: DateTime) => number | false
}
