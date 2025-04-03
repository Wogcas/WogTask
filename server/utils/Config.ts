import path from "path";
import "dotenv/config";

export const publicPath: string = path.join(__dirname, "../../public");
export const PORT: number = Number(process.env.PORT);
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_CLUSTER = process.env.DB_CLUSTER;
export const DB_NAME = process.env.DB_NAME;
export const DB_APP_NAME = process.env.DB_APP_NAME;

export const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority&appName=${DB_APP_NAME}`;