import "dotenv/config";
import { Options } from "sequelize";
const dialect = "mysql"

const config: Options = {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "123456",
    database: "Space_X_BD",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3002,
    dialect,
    dialectOptions: {
        timezone: "Z",
    },
    logging: false,
};

export default config;
