import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomeBanner from "./components/home/HomeBanner";
import HomeBookmarksBtn from "./components/home/HomeBookmarksBtn";
import HomeContent from "./components/home/HomeContent";

function App() {
  return (
    <>
      <Header />
      <HomeBanner />
      <HomeContent />
      <Footer />
      <HomeBookmarksBtn />
    </>
  );
}

export default App;
