import React,{useState} from 'react';
import ApartmentIcon from '@material-ui/icons/Apartment';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import KingBedIcon from '@material-ui/icons/KingBed';
import LocalTaxiTwoToneIcon from '@material-ui/icons/LocalTaxiTwoTone';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonIcon from '@material-ui/icons/Person';
import Navbar from '../../components/navbar/Navbar';
import { DateRange } from 'react-date-range';
import {format} from "date-fns"; 


const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);


  return (
    <div className='header'>
   
  
        <div className='headerContainer'>
        <Navbar/>
        <div className='headerList'>
            <div className='headerListItem active'>
<ApartmentIcon/><span>Stays</span>
            </div>
       
            <div className='headerListItem'>
<AirplanemodeActiveIcon/><span>Flights</span>
            </div>
       
            <div className='headerListItem'>
<DriveEtaIcon/><span>Car Rentals</span>
            </div>
       
            <div className='headerListItem'>
<KingBedIcon/><span>Attractions</span>
            </div>
    
   
            <div className='headerListItem'>
<LocalTaxiTwoToneIcon/><span>Airport Taxis</span>
            </div>
        </div>
       
       <h1 className='headerTitle'>A lifetime of discounts? it's genius </h1>
      <p className='headerDesc'>Get rewarded for your travels - unlock instant savings of 10% or more with us</p>
      <button className='headerBtn'>Sign in / Register</button>

      <div className='headerSearch'>
        <div className='headerSearchItem'>
          <KingBedIcon className='headerIcon'/>
          <input placeholder='Search for destinations' type='text' className='headerSearchInput'/>
        </div>
 
      
        <div className='headerSearchItem'>
        <CalendarTodayIcon className='headerIcon'/>
          <span className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
          <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
/>
            </div>
     
        <div className='headerSearchItem'>
        <PersonIcon className='headerIcon' />
          <span className='headerSearchText' >2 adults 2 children 1 room</span>
            </div>
            <div className='headerSearchItem'>
       <button className='headerBtn' >Search </button>
        </div>
  </div>
    
        </div>
    </div>
  )
}

export default Header