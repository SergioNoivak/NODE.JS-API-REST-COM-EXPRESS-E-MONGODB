import mongoose from "mongoose";
mongoose.connect(`MinhaStringDEBANCO`);
let db = mongoose.connection;
export default db;