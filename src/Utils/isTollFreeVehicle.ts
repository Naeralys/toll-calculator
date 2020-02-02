import Vehicle from "../Models/Vehicle"
import { VehicleType } from "../Types"

const tollFreeCars: VehicleType[] = [VehicleType.Electric]

export default (vehicle: Vehicle) => tollFreeCars.includes(vehicle.getVehicleType())
