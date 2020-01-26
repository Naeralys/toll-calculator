import Vehicle from "../../src/Models/Vehicle"
import { VehicleType } from "../../src/Types/Vehicle"

describe("vehicle", () => {
	const vehicle: Vehicle = new Vehicle(VehicleType.Car)
	it("vehicle is of type car", () => expect(vehicle.type()).toBe(VehicleType.Car))
	it("vehicle is not environmental", () => expect(vehicle.isEnvironmental()).toBeFalsy())
})
