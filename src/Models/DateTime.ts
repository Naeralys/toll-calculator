import { TimeGrading } from "../Types"
export default class DateTime extends Date {
	constructor(private date: Date) {
		super(date)
	}
	public getHourlyTimeType = () => {
		const hour = this.date.getHours()
		if ((hour >= 7 && hour < 10) || (hour >= 16 && hour < 18)) return TimeGrading.High
		if ((hour >= 10 && hour < 11) || (hour >= 15 && hour < 19)) return TimeGrading.Middle
		return TimeGrading.Low
	}
	public getDayMonthYear = () =>
		this.date.getDay() + ", " + this.date.getMonth() + ", " + this.date.getFullYear()
	public getDayMonth = () => this.date.getDay() + ", " + this.date.getMonth()
}
