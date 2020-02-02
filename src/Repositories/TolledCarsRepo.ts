import DateTime from "../Models/DateTime"
import Vehicle from "../Models/Vehicle"
import { TolledVehicleRecord } from "../Types"
import ITolledCarsRepo from "./ITolledCarsRepo"
import Repository from "./Repository"

export default class extends Repository<TolledVehicleRecord> implements ITolledCarsRepo {
	public addTolledVehicle = (vehicle: Vehicle, date: DateTime, fee: number): void => {
		this.add({ vehicle, date, fee })
	}
	public getDailyCarRecords = (vehicle: Vehicle, date: DateTime): TolledVehicleRecord[] => {
		const records = this.getAll()
		if (records) {
			const dailyCarRecords = records.map(currentRecord => {
				if (currentRecord.date === date && currentRecord.vehicle === vehicle)
					return currentRecord
			})
			return dailyCarRecords
		}
		return null
	}
}
