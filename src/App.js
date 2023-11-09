import AboutMe from "./components/AboutMe";
import DiagnosisAndAccident from "./components/DiagnosisAndAccident";
import ChallengingMoments from "./components/ChallengingMoments";
import Home from "./components/Home";
import HealthUpdate from "./components/HealthUpdate";
import FinancialBreakdown from "./components/FinancialBreakdown";
import FundraiserPage from "./components/FundraiserPage";
import ThankYouNote from "./components/ThankYouNote";
import ContactPage from "./components/ContactPage";
import GalleryAndVlogs from "./components/GalleryAndVlogs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App font-ShadowsIntoLight bg-black text-white">
      <Home />
      <AboutMe />
      <DiagnosisAndAccident />
      <ChallengingMoments />
      <HealthUpdate />
      <FinancialBreakdown />
      <FundraiserPage />
      <ThankYouNote />
      <GalleryAndVlogs />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
