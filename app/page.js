import { Suspense } from "react";
import EvenList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";

export default function Home() {
  return (
    <section className="container">
      <Header />

      <Suspense fallback={<p>Loading events...</p>}>
        <EvenList />
      </Suspense>
    </section>
  );
}
