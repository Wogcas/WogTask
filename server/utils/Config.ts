import path from "path";

export const publicPath: string = path.join(__dirname, "../../public");
export const PORT: number = Number(process.env.PORT) || 80;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = Number(process.env.DB_PORT);
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;