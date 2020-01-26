export default class {
	constructor(private holidays: Date[]) {}
	public isHoliday = (date: Date): boolean =>
		this.holidays.some(currentDate => currentDate.getDate() === date.getDate())
}
