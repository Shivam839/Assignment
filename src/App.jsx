import "./App.css";
import { IoLocationOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import ImageSlider from "./component/ImageSlider";

function App() {
  const handletoggle = () => {
    document.querySelector(".second").classList.toggle("first");
    document.querySelector(".firsttoggle").classList.toggle("first");
  };
  return (
    <div className="app">
      <div className="slider">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
          <h3>Astrix</h3>
        </div>
        <div className="imageSlider">
          <ImageSlider />
        </div>
        <div className="toggle" onClick={handletoggle}>
          <div className=" firsttoggle first ">Events</div>
          <div className="second">Collection</div>
        </div>
        <h1>ASTR IX EVEN TS</h1>
        <div className="pbackground">
          <p>
            Event : Oasis Bus tour , JLN Stadium , Delhi * Collection Live :
            Meta Lives , live on astrix
          </p>
        </div>
      </div>
      <div className="eventProgrammer">
        <h3>Explore Your First Event</h3>
        <h1>Event Name</h1>
        <div className="info">
          <h3>
            <IoLocationOutline /> Venue
          </h3>
          <h3>
            <LuAlarmClock /> 04/03/2024
          </h3>
          <h3>@ 19:00</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat
          placeat ducimus maxime animi, sed veniam. Nobis deleniti cumque earum
          neque.
        </p>
        <h3>Artist Lineup</h3>
        <div className="imagebox">
          <img src="/images/a.png" alt="" />
          <img src="/images/b.png" alt="" />
          <img src="/images/c.png" alt="" />
        </div>
        <div className="joinUs">
          <img src="/images/scanner.png" alt="" />
          <div>Join Waitlist</div>
        </div>
      </div>
    </div>
  );
}

export default App;
