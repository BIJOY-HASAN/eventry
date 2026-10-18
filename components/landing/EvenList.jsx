import EvenCard from "./EvenCard";

export default function EvenList(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
       <EvenCard />
    </div>
    );
}