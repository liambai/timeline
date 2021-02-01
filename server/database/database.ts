import mongoose from "mongoose";
import { EventModel } from "./events/events.model";

let database: mongoose.Connection;
export const connect = async () => {
  const uri = process.env.MONGO_URI;
  if (database) {
    return;
  }

  if (uri === undefined) {
    return console.log("connection string error");
  }

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Connected to database");
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
  console.log("Disconnected from databse");
};
