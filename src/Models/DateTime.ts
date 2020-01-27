import { TimeGrading } from "../Types/TimeGrading"
export default class DateTime extends Date {
	constructor(private date: Date) {
		super(date)
	}
	public getHourlyTimeType = () => {
		const hour = this.date.getHours()
		if (hour > 7 && hour < 10) return TimeGrading.High
		return TimeGrading.Low
	}
}
