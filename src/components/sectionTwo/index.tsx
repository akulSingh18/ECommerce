import "./style.css"
import rightArrow from "../../../right-arrow-img-2.png";
import pauseSubImg from "../../../pause-subscription-img.png";
import aiAnswerImg from "../../../AI-answer-img.png"

type feedBackType={
  heading:string,
  time:string,text:string,
  ftext:string,
  stext:string
}

const SectionTwo = () =>{




  const feedBackList:feedBackType[] = [{
    heading:"simple",
    time:"15",text:"min",
    ftext:"end a first reply in less than an hour,",
    stext:"become a power user in a day."
  },
  {
    heading:"powerful",
    time:"56",text:"%",
    ftext:"Respond to 56% more customer",
    stext:"messages in the first year."
  },
  {
    heading:"personal",
    time:"25",
    text:"%",
    ftext:"Our customers’ CSAT scores are 25%",
    stext:"higher than the industry average."


  }]


  return(
    <div className="main-two-cont">
      <div className="first-cont">
        <div className="first-heading-para-button-cont">
          <div className="first-heading-cont">
            Outstanding support with a personal touch
          </div>
          <div className="first-para-cont">
            <div className="para-cont">Delivering exceptional support requires great people and the right products. Help the team</div>
            <div className="para-cont">move faster and give customers instant answers with our all-in-one platform.</div>
          </div>
          <div className="first-button-cont">
            <button className="first-button">Start your free trial</button>
          </div>
        </div>
      </div>
      <div className="second-cont">
        <div className="media-one-cont"> 
          <div className="media-name-arrow-img-cont">
            <div className="media-name-cont">Power your team</div>
            <div className="arrow-img-cont">
              <img className="arrow-img" src={rightArrow}/>
            </div>
          </div>
          <div className="media-pause-subscription-image-cont">
            <img className="media-pause-subscription-image" src={pauseSubImg}/>
          </div>
        </div>
        <div className="media-two-cont">
          <div className="media-name-arrow-img-cont">
            <div className="media-name-cont">Empower customers</div>
            <div className="arrow-img-cont">
              <img  className="arrow-img" src={rightArrow}/>
            </div>
          </div>
          <div className="media-ai-answer-image-cont">
            <img className="media-ai-answer-image" src={aiAnswerImg}/>
          </div>
        </div> 
      </div>
      <div className="third-cont">
        <div className="third-inner-cont">
         
          {feedBackList.map((value:feedBackType,index:number)=>{
            return (
          <>
            <div className="simple-cont">
              <div className="simple-heading">{value.heading}</div>
              <div className="simple-lower-part-cont">
                <div className="time-and-text-cont">
                  <div className="time-cont">{value.time}</div>
                  <div className="min-text-cont">{value.text}</div>
                  <div className="watch-img-cont"><img className="watch-img" src={"v"}/></div>
                </div>
                <div className="lower-text-cont">
                  <div className="first-lower-text">{value.ftext}</div>
                  <div className="second-lower-text">{value.stext}</div>
                </div>
              </div>
            </div>
          </>
          )})}
        </div>
        
      </div>
    </div>
  )
}

export default SectionTwo;