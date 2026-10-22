import { eventModel } from "@/models/event-models";
import { dbConnect } from "@/services/mongo";

async function getAllEvents() {
  await dbConnect();
  return eventModel.find().lean();
}

export { getAllEvents };