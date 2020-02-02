import DateTime from "../Models/DateTime"
import Vehicle from "../Models/Vehicle"

export default interface ITollService {
	calculateTollFee: (vehicle: Vehicle, date: DateTime) => number
}
