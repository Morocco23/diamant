import LocateButton from "./location";
import "./diamant.css";

function Diamant() {
  return (
    <>
      <div className="hero">
        <div className="overlay" />
        <div className="content">
          <h1>Diamant Bar</h1>
          <p>Cold beers. Good vibes. Open till day break.</p>
          <LocateButton className="d1-locate"/>
        </div>
      </div>

      
    </>
    
  );
}

export default Diamant;