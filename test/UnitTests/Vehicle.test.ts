import Vehicle from "../../src/Models/Vehicle"
import { VehicleType } from "../../src/Types"

describe("vehicle", () => {
	const vehicle: Vehicle = new Vehicle(VehicleType.Car)
	it("vehicle is of type car", () => expect(vehicle.getVehicleType()).toBe(VehicleType.Car))
	it("vehicle is not environmental", () => expect(vehicle.isEnvironmental()).toBeFalsy())
})
