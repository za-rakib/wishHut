import "./App.css";
import Announcement from "./components/Announcement/Announcement";
import Slider from "./components/Slider/Slider";
import Home from "./pages/Home/Home";

function App() {
  return ( 
    <div className="App">
      <Announcement />
      <Home />
      <Slider/>
    </div>
  );
}

export default App;
