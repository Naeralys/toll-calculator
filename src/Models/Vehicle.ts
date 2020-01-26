import { VehicleType } from "../Types/Vehicle"

export default class {
	constructor(private vehicleType: VehicleType) {}
	public isEnvironmental = (): boolean =>
		this.vehicleType === VehicleType.Electric || this.vehicleType === VehicleType.Environmental
			? true
			: false
	public type = (): VehicleType => this.vehicleType
}
