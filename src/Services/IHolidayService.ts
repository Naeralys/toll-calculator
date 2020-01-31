import DateTime from "../Models/DateTime"
export default interface IHolidayService {
	isHoliday: (date: DateTime) => boolean
}
