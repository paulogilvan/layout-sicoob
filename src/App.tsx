import { CooperatedSection } from "./components/CooperatedSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MainContent } from "./components/MainContent";
import { Range } from "./components/range";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Range />
      <MainContent />
      <CooperatedSection />
      <Footer />
    </>
  )
}

export default App;
