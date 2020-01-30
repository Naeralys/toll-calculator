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
		// If not within the same day
		if (this.latestTollTime.getDate() !== date.getDate()) {
			this.latestTollTime = date
			this.currentFee = fee
			return this.getCurrentFee()
		}

		// If within the same hour
		const HOUR = 1000 * 60 * 60
		const anHourAgo = date.getTime() - HOUR

		if (this.latestTollTime.getTime() > anHourAgo) {
			if (fee > this.currentFee) this.currentFee = fee
		} else this.latestTollTime = date

		// If within the same day
		if (this.latestTollTime.getDate() === date.getDate()) {
			if (this.currentFee + fee > 60) {
				this.currentFee = 60
			}
		}

		return this.getCurrentFee()
	}
}
