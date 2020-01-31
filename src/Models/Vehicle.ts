import { isWithinSameDay, isWithinSameHour } from "../Services/CalculatorService"
import { VehicleType } from "../Types"
import DateTime from "./DateTime"

export default class {
	private currentFee: number = 0
	private latestTollTime: DateTime = new DateTime(new Date(0, 0, 0, 0, 0, 0))
	private vehicleIsTollFree: boolean = false
	constructor(private vehicleType: VehicleType) {}
	public isTollFree = (): boolean => this.vehicleIsTollFree
	public getVehicleType = (): VehicleType => this.vehicleType
	public getCurrentFee = (): number => this.currentFee
	public getLatestTollTime = (): DateTime => this.latestTollTime
	public setCurrentFee = (newCurrentFee: number) => (this.currentFee = newCurrentFee)
	public setNewLatestTollTime = (date: DateTime) => (this.latestTollTime = date)
	public setVehicleIsTollFree = (isTollFree: boolean) => (this.vehicleIsTollFree = isTollFree)
}
