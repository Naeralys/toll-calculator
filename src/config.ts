import { config } from "dotenv"
config()

export const MAX_DAILY_TOLL_FEE: number = parseInt(process.env.MAX_DAILY_TOLL_FEE)
