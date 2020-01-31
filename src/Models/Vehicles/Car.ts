import { Vehicle } from ".."
import { VehicleType } from "../../Types"

export default class extends Vehicle {
	constructor() {
		super(VehicleType.Car)
	}
}
