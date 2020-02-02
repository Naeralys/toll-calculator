import DateTime from "../Models/DateTime"

export default (a: DateTime, b: DateTime) => a.getDate() === b.getDate()
