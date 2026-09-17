import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
    try {
        const db = await connect("mongodb://localhost:27017/tienda-mongo");
        console.log("Database connected to", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();