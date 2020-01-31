import DateTime from "../Models/DateTime"
import IHolidayService from "./IHolidayService"
export default class implements IHolidayService {
	constructor(private holidays: DateTime[]) {}
	public isHoliday = (date: DateTime): boolean =>
		this.holidays.some(currentDate => currentDate.getDate() === date.getDate())
}
