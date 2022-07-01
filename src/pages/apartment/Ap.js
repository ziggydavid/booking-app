import Header from "../../components/header/Header";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import CheckIcon from '@material-ui/icons/Check';
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { ArrowBack,ArrowForward,Cancel } from "@material-ui/icons";



const Ap = () => {

  const [slideId, setSlideId] = useState();
  const [openSlide, setOpenSlide] = useState(false)

  const photos = [{
    src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/65658534.jpg?k=ddf02c925e445aba19ecf194e7f45acab90f4bc16ee8ab91f096d5424f08f356&o=&hp=1"
  },
{
  src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/65658531.jpg?k=c294ea5d79a5c81e07db04fa36593467660d8061977766cbbaf9b409b0a82974&o=&hp=1"
},
{
  src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/79930189.jpg?k=97214eeb62915130d82f568dc1f7d31373edcee1409994fead6d9f5415e266f5&o=&hp=1"
},
{
  src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/65658496.jpg?k=b5947178b65900e91261996a478116cff0d9e2e62e2b5a58a5bb1737160bc33d&o=&hp=1"
},
{
  src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/65658489.jpg?k=9d33cc1cd7964f7923936955e708a1c8f4ef4e499ab679c9c1b7616d18ec3b58&o=&hp=1"
},
{
  src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/79930173.jpg?k=5367fcf1270c7d9c5278140d6c8c6b4d72391d02b418347d2ab4100a34411f5e&o=&hp=1"
},
{
  src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/65658518.jpg?k=b924cc106241f4c2a622bd0c676db2ccfb6079382e6d5f937459a31bc08675f0&o=&hp=1"
},
{
  src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/65658535.jpg?k=21adb8bb886f9aa0c353c8964ad8b95b7491cfa389c996eec0fb2fca718ce6a0&o=&hp=1"
}
]

const handleOpenSlide = (i) => {
  setSlideId(i)
  setOpenSlide(true)
}
const handleMove = (direction) => {
  let newSlideId;

  if (direction === "l") {
    newSlideId = slideId === 0? 5 : slideId-1;
  }else{
    newSlideId = slideId === 5? 0 : slideId+1
  }
  return setSlideId(newSlideId)
}

  return (
<>
<Header type='List'/>
<div className="apContainer">
  {openSlide && 
    <div className="slider">
      <Cancel onClick={() => setOpenSlide(false)} className="cancel"/>
<ArrowBack className="Arrow" onClick={() => handleMove("l")}/>
<div className="sliderWrapper">
<img src={photos[slideId].src} alt="" className="slideImg"/>
      </div>
      <ArrowForward className="Arrow" onClick={() => handleMove("r")}/>
      </div>
  }
  <div className="apWrapper">
    <button className="bookBtn">Reserve</button>
    <h1 className="apTitle">Ilunion Suites Madrid </h1>
    <div className="apAddress">
      <LocationOnIcon />
      <span>Lopez de Hoyos, 143, Chamartín, 28002 Madrid, Spain </span>
    </div>
    <div className="apImages">
   
        {
          photos.map((photo,i) => (
            <div className="imgWrapper">
            <img onClick={() => handleOpenSlide(i)} src={photo.src} alt="" className="apImage" />
            </div>
          ))
        }   
    </div>
    <div className="apDetails">
      <div className="apDetailsTexts">
          <h1 className="apTitle"></h1>
          <p className="apDesc">
          The Ilunion Suites Madrid is located in Madrid's Chamartín district. It is set next to the M-30 Motorway, which leads to Barajas airport and the IFEMA convention center. Free WiFi is available throughout the hotel.

All of the stylish rooms at the Ilunion Suites Madrid feature wooden floors and air conditioning. They have a 43-inch flat-screen TV with satellite channels. The private bathroom comes with a hairdryer and free toiletries. Most rooms are spacious suites with either an integrated or a separated living area.

This hotel is officially adapted for guests with reduced mobility, accessible rooms are available on request, also for people with auditory and visual impairment.

A free internet corner equipped with several computers is also available, so guests can stay connected during their stay.

Ilunion Suite Madrid’s stylish restaurant serves a daily breakfast, as it also offers à la carte and set menus using seasonal products. Room service is available during limited hours and a snack bar is open all day long. A special menu is available for celiac and food intolerant guests.
          </p>      
      </div>
      <div className="apHighlight">
        <h3 className="apHTtitle">Property Highlights</h3>
        <h4 className="apHTtitle2">Perfect for a 1-night stay!</h4>
        <div className="apH-item">
<LocationOnIcon/>Top Location: Highly rated by recent guests (8.4)
</div>
<div className="apH-item">
<LocalParkingIcon /> Parking available at the hotel
</div>
<h2 className="apHTtitle2"> Loyal Customers</h2>
<div className="apH-item2">
<CheckIcon/>There are more repeat guests here than most other properties
</div>
<div className="apFooter">
<button className="bookingBtn">Reserve </button>
</div>
      </div>
    </div>
  </div>
  <MailList/>
<Footer/>
</div>

</>
  )
}

export default Ap