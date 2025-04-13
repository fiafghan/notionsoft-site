import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import BusinessSections from "../components/BusinessSections";
import ExecutiveNotes from "../components/ExecuiveNotes";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-300 via-orange-200 to-gray-100">
     <Header />
     <HeroSlider />
     <BusinessSections />
     <ExecutiveNotes />
     <Footer />
    </div>
  );
}
