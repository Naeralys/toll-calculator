import DateTime from "../Models/DateTime"

export const isWithinSameDay = (a: DateTime, b: DateTime) => a.getDate() === b.getDate()
export const isWithinSameHour = (currentTime: DateTime, previousHour: DateTime) => {
	const HOUR = 1000 * 60 * 60
	const anHourAgo = previousHour.getTime() - HOUR
	return currentTime.getTime() > anHourAgo
}
