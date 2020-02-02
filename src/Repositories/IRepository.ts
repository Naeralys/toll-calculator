export default interface IRepository<T> {
	add: (item: T) => number
	get: (item: T) => T
}
