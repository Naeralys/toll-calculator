import DateTime from "../Models/DateTime"
import Vehicle from "../Models/Vehicle"

export enum TimeGrading {
	Low,
	Middle,
	High
}
export enum VehicleType {
	Car,
	Environmental,
	Electric,
	Motorcycle
}
export interface TolledVehicleRecord {
	vehicle: Vehicle
	date: DateTime
	fee: number
}
