import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from "./Components/Banner";
import Detail from "./Components/Detail";
import Schedule from './Components/Schedule';
import Highlight from './Components/Highlight';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="Landing-page">
      <header className="header">
        <Navbar />
      </header>
      <div className="banner-section">
        <Banner />
      </div>
      <div className='detail-section' id='detail'>
        <Detail />
      </div>
      <div className="schedule-section" id='schedule'>
        <Schedule />
      </div>
      <div className="highlight-section" id='highlight'>
        <Highlight />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;