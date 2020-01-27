import Vehicle from "./Models/Vehicle"
import { VehicleType } from "./Types/Vehicle"
import HolidayService from "./Services/HolidayService"
import TollService from "./Services/TollService"
import DateTime from "./Models/DateTime"

const vehicle = new Vehicle(VehicleType.Car)
const holiday = new DateTime(new Date(2020, 2, 2, 10, 0, 0, 0))
const holidays = new HolidayService([holiday])
const tollService = new TollService(holidays)
const date = new DateTime(new Date(2020, 2, 3, 9, 0, 0, 0))

const fee = tollService.ChargeTollFee(vehicle, date)
vehicle.toll(fee, date.getHours())

console.log("Total fee to pay: ", fee)
