import { Suspense } from "react";
import { connection } from "next/server";
import { getEventById } from "@/db/queries";
import EventDetails from "@/components/details/EventDetails";
import EventVenu from "@/components/details/EventVenu";
import HeroSection from "@/components/details/HeroSection";

export default function Page({ params }) {
  return (
    <Suspense fallback={<p>Loading event details...</p>}>
      <EventContent params={params} />
    </Suspense>
  );
}

async function EventContent({ params }) {
  await connection();

  const { id } = await params;
  const eventInfo = await getEventById(id);

  if (!eventInfo) {
    return <p>Event not found</p>;
  }

  return (
    <>
      <HeroSection event={eventInfo} />

      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails event={eventInfo} />
          <EventVenu event={eventInfo} />
        </div>
      </section>
    </>
  );
}