import scoutLogo from "../../../scout-logo.png";
import downArrow from "../../../down-arrow.png";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
        <div className="web-logo-and-name-cont">
          <div className="-web-logo-cont">
            <img className="logo-img" src={scoutLogo} />
          </div>
          <div className="web-name-cont">
            Help Scout
          </div>
        </div>
        <div className="nav-items-cont">
          <div className="min-nav-cont">
            <div className="nav-items">
              Product 
              <div className="arrow-icon">
                <img className="Arrow-icons-img" src={downArrow}/>
              </div>
            </div>
            <div className="nav-items">
              Solutions 
              <div className="arrow-icon">
                <img className="Arrow-icons-img" src={downArrow}/>
              </div>
            </div>
            <div className="nav-items">
              Resources 
              <div className="arrow-icon">
                <img className="Arrow-icons-img" src={downArrow}/>
              </div>
            </div>
            <div className="nav-items">
              Company 
              <div className="arrow-icon">
                <img className="Arrow-icons-img" src={downArrow}/>
              </div>
            </div>
            <div className="nav-items">
              Pricing 
            </div>
          
          </div>
          
        </div>
      <div className="login-and-freetrial-cont">
        <div className="login-cont">
          Login
        </div>
        <div className="free-trial-btn-cont">
          <button className="free-trial-button">Free Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Header;