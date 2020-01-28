import { VehicleType } from "../Types/Vehicle"
import DateTime from "./DateTime"

export default class {
	private latestTollTime = new DateTime(new Date(0, 0, 0, 0, 0, 0))
	constructor(private vehicleType: VehicleType) {}
	public isEnvironmental = (): boolean =>
		this.vehicleType === VehicleType.Electric || this.vehicleType === VehicleType.Environmental
			? true
			: false
	public getVehicleType = (): VehicleType => this.vehicleType
	public toll = (fee: number, dateTimeInHourly: number) => {}
}
