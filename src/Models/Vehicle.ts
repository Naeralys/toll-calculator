import { isWithinSameDay, isWithinSameHour } from "../Services/CalculatorService"
import { VehicleType } from "../Types"
import DateTime from "./DateTime"

export default class {
	private currentFee: number = 0
	private latestTollTime: DateTime = new DateTime(new Date(0, 0, 0, 0, 0, 0))
	constructor(private vehicleType: VehicleType) {}
	public isEnvironmental = (): boolean =>
		this.vehicleType === VehicleType.Electric || this.vehicleType === VehicleType.Environmental
	public getVehicleType = (): VehicleType => this.vehicleType
	public getCurrentFee = (): number => this.currentFee
	public toll = (fee: number, date: DateTime) => {
		if (!isWithinSameDay(this.latestTollTime, date)) {
			this.latestTollTime = date
			this.currentFee = fee
			return this.getCurrentFee()
		}
		if (isWithinSameHour(this.latestTollTime, date)) {
			if (fee > this.currentFee) this.currentFee = fee
		} else this.latestTollTime = date
		if (isWithinSameDay(this.latestTollTime, date)) {
			if (this.currentFee + fee > 60) {
				this.currentFee = 60
			}
		}
		return this.getCurrentFee()
	}
}
