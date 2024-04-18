import "./App.css";
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function Home() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;