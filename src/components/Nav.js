import { useState } from "react";

export default function Nav() {

  const [navSelection, setNavSelection] = useState()
  const [hovering, setHovering] = useState(false)

  const changeHoveringtoTrue = () => {
    setHovering(true)
  }
  const changeHoveringtoFalse = () => {
    setHovering(false)
    setNavSelection(null)
  }

  const showNavSelection = (selection) =>{
    switch(selection) {
      case 'VEHICLES':
        return <Vehicles hovering={hovering}/>;
      case 'ENERGY':
        return <Energy hovering={hovering}/>;
        case 'CHARGING':
          return <Charging hovering={hovering}/>;
        case 'DISCOVER':
          return <Discover hovering={hovering}/>;
        case 'SHOP':
          return <Shop hovering={hovering}/>;
      default:
        return null
    }
  }

  return (
    <section>
      <div id="main-nav">
        <div className="logo-div">
          {!hovering?
          <>
            <img src="/images/tesla.png" alt="Tesla"/>
          </>:
          <>
            <img src="/images/tesla-dark.png" alt="Tesla"/>
          </>}
        </div>

        <div className={`nav-links-div ${hovering?`nav-links-dark`:null}`}>
          <div className="nav-link" onMouseEnter={()=>{
            changeHoveringtoTrue()
            setNavSelection("VEHICLES")
          }}>VEHICLES</div>
          <div className="nav-link" onMouseEnter={()=>{
            changeHoveringtoTrue()
            setNavSelection("ENERGY")
          }}>ENERGY</div>
          <div className="nav-link" onMouseEnter={()=>{
            changeHoveringtoTrue()
            setNavSelection("CHARGING")
          }}>CHARGING</div>
          <div className="nav-link" onMouseEnter={()=>{
            changeHoveringtoTrue()
            setNavSelection("DISCOVER")
          }}>DISCOVER</div>
          <div className="nav-link" onMouseEnter={()=>{
            changeHoveringtoTrue()
            setNavSelection("SHOP")
          }}>SHOP</div>
        </div>
        
        <div className="nav-icons-div">
          <div className="nav-icon">
              {!hovering?
              <>
              <img src="/images/help.png" alt="Help"/>
              </>:
              <>
              <img src="/images/help-dark.png" alt="Help"/>
              </>}
          </div>
          <div className="nav-icon">
            {!hovering?
              <>
              <img src="/images/globe.png" alt="Globe"/>
              </>:
              <>
              <img src="/images/globe-dark.png" alt="Globe"/>
              </>}
          </div>
          <div className="nav-icon">
            {!hovering?
              <>
              <img src="/images/user.png" alt="User"/>
              </>:
              <>
              <img src="/images/user-dark.png" alt="User"/>
              </>}
          </div>
        </div>
      </div>
      <div onMouseEnter={changeHoveringtoFalse} className={`nav-links-contents-overlay ${hovering? `nav-links-hovering`: null}`}>
        
      </div>
      <div className={`nav-links-contents ${hovering? `nav-links-hovering`: null}`}>
        <div className="nav-links-content-div" >
          {showNavSelection(navSelection)}
        </div>
      </div>
    </section>
  );
}


function Vehicles(props){
    return(
      <div className={`vehicles-div ${props.hovering?`vehicles-div-hover`:null}`}>
      <div className="vehicles-grid">
        <div className="vehicle-model">
          <img src="/images/modelS.png" alt="Model S"/>
          <h3>Model S</h3>
          <p><span>Learn</span> <span>Order</span></p>
        </div>
        <div className="vehicle-model">
          <img src="/images/model3.png" alt="Model 3"/>
          <h3>Model 3</h3>
          <p><span>Learn</span> <span>Order</span></p>
        </div>
        <div className="vehicle-model">
          <img src="/images/modelX.png" alt="Model X"/>
          <h3>Model X</h3>
          <p><span>Learn</span> <span>Order</span></p>
        </div>
        <div className="vehicle-model">
          <img src="/images/modelY.png" alt="Model Y"/>
          <h3>Model Y</h3>
          <p><span>Learn</span> <span>Order</span></p>
        </div>
        <div className="vehicle-model">
          <img src="/images/cybertruck.png" alt="Cybertruck"/>
          <h3>Cybertruck</h3>
          <p><span>Learn</span> <span>Order</span></p>
        </div>
        <div className="vehicle-model">
          <img src="/images/choose.png" alt="Help Choose"/>
          <h3>Help Me Choose</h3>
          <p><span>Learn</span> <span>Order</span></p>
        </div>
      </div>
      <div className="vehicles-links">
        <ul className="vehicles-links-list">
          <li>Inventory</li>
          <li>Used Cars</li>
          <li>Demo Drive</li>
          <li>Trade-In</li>
          <li>Compare</li>
          <li>Help Me Charge</li>
          <li>Fleet</li>
          <li>Semi</li>
          <li>Roadster</li>
        </ul>
      </div>
    </div>
    )
}

function Energy(props){
  return(
    <div className={`vehicles-div ${props.hovering?`vehicles-div-hover`:null}`}>
    <div className="vehicles-grid">
      <div className="vehicle-model">
        <img src="/images/solarpanel.jpeg" alt="Solar panels"/>
        <h3>Solar Panels</h3>
        <p><span>Learn</span> <span>Order</span></p>
      </div>
      <div className="vehicle-model">
        <img src="/images/solarroof.jpeg" alt="Solar roof"/>
        <h3>Solar Roof</h3>
        <p><span>Learn</span> <span>Order</span></p>
      </div>
      <div className="vehicle-model">
        <img src="/images/powerwall.png" alt="Powerwall"/>
        <h3>Powerwall</h3>
        <p><span>Learn</span> <span>Order</span></p>
      </div>
      <div className="vehicle-model">
        <img src="/images/megapack.png" alt="Megapack"/>
        <h3>Megapack</h3>
        <p><span>Learn</span> <span>Order</span></p>
      </div>
    </div>
    <div className="vehicles-links">
      <ul className="vehicles-links-list">
        <li>Schedule a consultation</li>
        <li>Why solar</li>
        <li>Incentives</li>
        <li>Support</li>
        <li>Compare</li>
        <li>Partner with Tesla</li>
        <li>Commercial</li>
        <li>Utilities</li>
      </ul>
    </div>
  </div>
  )
}


function Charging(props){
  return(
    <div className={`vehicles-div ${props.hovering?`vehicles-div-hover`:null}`}>
    <div className="vehicles-grid">
      <div className="vehicle-model">
        <img src="/images/charging.png" alt="Charging"/>
        <h3>Charging</h3>
        <p><span>Learn</span></p>
      </div>
      <div className="vehicle-model">
        <img src="/images/homecharger.png" alt="Home Charging"/>
        <h3>Home Charging</h3>
        <p><span>Learn</span> <span>Order</span></p>
      </div>
      <div className="vehicle-model">
        <img src="/images/supercharger.png" alt="Super Charger"/>
        <h3>Supercharging</h3>
        <p><span>Learn</span> <span>Order</span></p>
      </div>
    </div>
    <div className="vehicles-links">
      <ul className="vehicles-links-list">
        <li>Help Me Charge</li>
        <li>Charging Calculator</li>
        <li>Trip Planner</li>
        <li>Supercharger Voting</li>
        <li>Host a Supercharger</li>
        <li>Commercial Charging</li>
        <li>Host Wall Connectors</li>
      </ul>
    </div>
  </div>
  )
}

function Discover(props){
  return(
    <div className={`vehicles-div ${props.hovering?`vehicles-div-hover`:null}`}>
    <div className="discover-grid">
      <div className="">
        <h4 className="discover-title">Resources</h4>
        <ul className="discover-links-list">
          <li>Demo Drive</li>
          <li>Insurance</li>
          <li>Video Guides</li>
          <li>Customer Stories</li>
          <li>Events</li>
        </ul>
      </div>
      <div className="">
        <h4 className="discover-title">Location Services</h4>
        <ul className="discover-links-list">
          <li>Find Us</li>
          <li>Trip Planner</li>
          <li>Find a Collision Center</li>
          <li>Find a Certified Installer</li>
        </ul>
      </div>
      <div className="">
        <h4 className="discover-title">Company</h4>
        <ul className="discover-links-list">
          <li>About</li>
          <li>Career</li>
          <li>Investor Relations</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

function Shop(props){
  return(
    <div className={`vehicles-div ${props.hovering?`vehicles-div-hover`:null}`}>
    <div className="shop-grid">
      <div className="shop-item">
        <img src="/images/charger.png" alt="Home Charger"/>
        <h3>Charging</h3>
      </div>
      <div className="shop-item">
        <img src="/images/tire.png" alt="Tire"/>
        <h3>Vehicle Accessories</h3>
      </div>
      <div className="shop-item">
        <img src="/images/cap.png" alt="Cap"/>
        <h3>Apparel</h3>
      </div>
      <div className="shop-item">
        <img src="/images/bag.png" alt="Backpack"/>
        <h3>Lifestyle</h3>
      </div>
    </div>
  </div>
  )
}