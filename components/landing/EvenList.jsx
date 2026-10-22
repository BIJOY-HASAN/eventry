
import { connection } from "next/server";
import { getAllEvents } from "@/db/queries";
import EvenCard from "./EvenCard";

export default async function EvenList() {
  await connection();

  const allEvents = await getAllEvents();

  console.log(allEvents);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <EvenCard />
    </div>
  );
}
