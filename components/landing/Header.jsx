export default function Header() {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-3xl">Discover Events</h1>

      <div>
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#414245]  border
          text-white
            placeholder:text-white
             border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        />
      </div>
    </div>
  );
}
