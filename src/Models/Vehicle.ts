import { VehicleType } from "../Types"
export default class {
	constructor(private vehicleType: VehicleType) {}
	public getVehicleType = (): VehicleType => this.vehicleType
}
