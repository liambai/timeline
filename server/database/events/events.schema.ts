import { Schema } from "mongoose";

const EventSchema = new Schema(
  {
    startYear: Number,
    endYear: Number,
    title: String,
    description: String,
  },
  { collection: "timelines" }
);
export default EventSchema;
