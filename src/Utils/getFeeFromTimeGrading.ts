import { FEE_TIME_GRADING } from "../config"
import DateTime from "../Models/DateTime"
import { TimeGrading } from "../Types"

export default (date: DateTime) => {
	switch (date.getHourlyTimeType()) {
		case TimeGrading.Low:
			return FEE_TIME_GRADING.LOW
		case TimeGrading.Middle:
			return FEE_TIME_GRADING.MIDDLE
		case TimeGrading.High:
			return FEE_TIME_GRADING.HIGH
	}
}
