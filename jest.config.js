module.exports = {
	roots: ['<rootDir>/test'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	collectCoverage: true,
	collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/vendor/**']
}
