import DateTime from "../Models/DateTime"
import Vehicle from "../Models/Vehicle"
import { TolledVehicleRecord } from "../Types"
import Repository from "./Repository"

export default interface ITolledCarsRepo extends Repository<TolledVehicleRecord> {
	addTolledVehicle: (vehicle: Vehicle, date: DateTime, fee: number) => void
	getDailyCarRecords: (vehicle: Vehicle, date: DateTime) => TolledVehicleRecord[]
}
