import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomeBanner from "./components/home/HomeBanner";
import HomeContent from "./components/home/HomeContent";

function App() {
  return (
    <>
      <Header />
      <HomeBanner />
      <HomeContent />
      <Footer />
    </>
  );
}

export default App;
