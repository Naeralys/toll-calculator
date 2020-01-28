import DateTime from "../Models/DateTime"
export default class {
	constructor(private holidays: DateTime[]) {}
	public isHoliday = (date: DateTime): boolean =>
		this.holidays.some(currentDate => currentDate.getDate() === date.getDate())
}
