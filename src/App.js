import AboutMe from "./components/AboutMe";
import DiagnosisAndAccident from "./components/DiagnosisAndAccident";
import ChallengingMoments from "./components/ChallengingMoments";
import Home from "./components/Home";

function App() {
  return (
    <div className="App font-ShadowsIntoLight">
      <Home />
      <AboutMe />
      <DiagnosisAndAccident />
      <ChallengingMoments />
    </div>
  );
}

export default App;
