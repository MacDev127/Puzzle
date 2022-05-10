import "./index.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Banner />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
