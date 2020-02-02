import DateTime from "../Models/DateTime"

export default (currentTime: DateTime, previousHour: DateTime) => {
	const HOUR = 1000 * 60 * 60
	const anHourAgo = previousHour.getTime() - HOUR
	return currentTime.getTime() > anHourAgo
}
