import Scheduling from "../models/Scheduling.model.js";

const createSchedulingService = (body) => Scheduling.create(body);
const findAllSchedulingService = () => Scheduling.find();
const findSchedulingService = (date) => Scheduling.find({ ScheduleDate });
const findSchedulingByIdService = (_id) => Scheduling.findById(_id);
const patchSchedulingService = (_id, body) =>
  Scheduling.findByIdAndUpdate(_id, body, { new: true });
const deleteSchedulingService = (_id) => Scheduling.findByIdAndDelete(_id);

export default { 
  createSchedulingService,
  findAllSchedulingService,
  findSchedulingService,
  findSchedulingByIdService,
  patchSchedulingService,
  deleteSchedulingService,
}