import { eventModel } from "@/models/event-models";
import { dbConnect } from "@/services/mongo";
import {
  replaceMangoIdInObject,
  replaceMongoIdInArray,
} from "@/utils/data-util";

async function getAllEvents() {
  await dbConnect();
  const allEvents = await eventModel.find().lean();
  return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
  await dbConnect();
console.log("Searching ID:", eventId);
  const event = await eventModel.findById(eventId).lean();
console.log("MongoDB result:", event);
  if (!event) {
    return null;
  }

  return replaceMangoIdInObject(event);
}

export { getAllEvents, getEventById };
