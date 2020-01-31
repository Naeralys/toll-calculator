import { FEE_TIME_GRADING } from "../config"
import DateTime from "../Models/DateTime"
import { TimeGrading } from "../Types"

export const isWithinSameDay = (a: DateTime, b: DateTime) => a.getDate() === b.getDate()
export const isWithinSameHour = (currentTime: DateTime, previousHour: DateTime) => {
	const HOUR = 1000 * 60 * 60
	const anHourAgo = previousHour.getTime() - HOUR
	return currentTime.getTime() > anHourAgo
}
export const getFeeFromTimeGrading = (date: DateTime) => {
	switch (date.getHourlyTimeType()) {
		case TimeGrading.Low:
			return FEE_TIME_GRADING.LOW
		case TimeGrading.Middle:
			return FEE_TIME_GRADING.MIDDLE
		case TimeGrading.High:
			return FEE_TIME_GRADING.HIGH
	}
}
