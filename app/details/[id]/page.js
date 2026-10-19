import EvenDetails from "@/components/details/EvenDetails";
import EvenVenu from "@/components/details/EvenVenu";
import HeroSection from "@/components/details/HeroSection";

const page = () => {
    return (
  <>
    <HeroSection />
    <section className="container">
      <div className="grid grid-cols-5 gap-12 my-12">
        <EvenDetails />
        <EvenVenu />
      </div>
    </section>
  </>
   )
};
export default page;
