import mongoose from "mongoose";

const SchedulingSchema = new mongoose.Schema(
  {
    juniorCompany: {
      type: String,
      required: true,
    },
    scheduleDate: {
      type: Date,
      required: true,
    },
    scheduleStartTime: {
      type: String,
      required: true,
    },
    scheduleEndTime: {
      type: String,
      required: true,
    },
    reservedBy: {
      type: String,
      required: true,
    },
    passwordToChange: {
      type: String,
      required: true,
    },
    observation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Scheduling = mongoose.model("Scheduling", SchedulingSchema);
export default Scheduling;
