import "./style.css";

import orderUpdateImg from "../../../order-update-img.jfif";
import startConvImg from "../../../start-a-coversation-img.png";
import  lookForHelp from "../../../looking-for-help-img.png"



const SectionOne = () =>{
  return (
    <div className="main-cont">
      <div className="main-cont-upper-part">
        <div className="left-box">
          </div>
          <div className="center-box">
          </div>
          <div className="right-box">
          </div>
          <div className="main-text-cont">
              <div className="main-text-first-cont">The Customer-First PlatForm</div>
              <div className="main-text-second-cont"> your whole team will love</div>
          </div>
      </div>
      
      <div className="images-cont">
        <img className="order-update-img" src={orderUpdateImg}/>
        <img className="start-conv-img" src={startConvImg}/>
        <img className="look-for-help-img" src={lookForHelp}/>
      </div>
    </div>
  )
}

export default SectionOne;