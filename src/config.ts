import { config } from "dotenv"
config()

export const MAX_DAILY_TOLL_FEE: number = parseInt(process.env.MAX_DAILY_TOLL_FEE)
export const FEE_TIME_GRADING: {
	LOW: number
	MIDDLE: number
	HIGH: number
} = {
	LOW: parseInt(process.env.LOW_FEE),
	MIDDLE: parseInt(process.env.MIDDLE_FEE),
	HIGH: parseInt(process.env.HIGH_FEE)
}
