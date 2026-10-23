import Image from "next/image";
import ActionButton from "../ActionButton";

export default function HeroSection({ event }) {
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={event.imageUrl}
          alt={event.name}
          className="h-[450px] w-auto mx-auto object-contain"
          width={900}
          height={450}
          priority
        />
      </div>

      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">
            {event.name}
          </h1>

          <p className="text-[#9C9C9C] text-base mt-1">
            {event.location}
          </p>

          <div className="text-[#737373] text-sm mt-1">
            <span>{event.interested_ids?.length ?? 0} Interested</span>
            <span> | </span>
            <span>{event.going_ids?.length ?? 0} Going</span>
          </div>
        </div>

        <ActionButton fromDetails={true} />
      </div>
    </section>
  );
}