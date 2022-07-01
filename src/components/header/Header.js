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
import { useNavigate } from 'react-router-dom';


const Header = ({type}) => {
  const [destination, setDestination] = useState("")
  const [showdate, setShowDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [showOptions, setShowOptions] = useState(false)
  const [options, setOptions] = useState({
    adult:1,
    children:0,
    room: 1
  })

    const handleOption = (option, action) => {
      setOptions({
        ...options, [option]: action == 'i' ? options[option] + 1 : options[option] - 1 
      })
    }

    const navigate = useNavigate()

    const handleSearch = () => {
        navigate("/apartments", {state:{destination,date,options}})
    }

  return (
    <div className='header'>
   
  
        <div className={type=="List" ? 'headerContainer listHead' : 'headerContainer'}>
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
        {type !== "List" && <>     
       <h1 className='headerTitle'>A lifetime of discounts? it's genius </h1>
      <p className='headerDesc'>Get rewarded for your travels - unlock instant savings of 10% or more with us</p>
      <button className='headerBtn'>Sign in / Register</button>

      <div className='headerSearch'>
        <div className='headerSearchItem'>
          <KingBedIcon className='headerIcon'/>
          <input placeholder='Search for destinations' type='text' className='headerSearchInput' onChange={e => setDestination(e.target.value)}/>
        </div>
 
      
        <div className='headerSearchItem'>
        <CalendarTodayIcon className='headerIcon'/>
          <span onClick={() => setShowDate(!showdate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
         {showdate && ( <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  minDate={new Date()}
  className="date"
/>) }
            </div>
     
        <div className='headerSearchItem'>
        <PersonIcon className='headerIcon' />
          <span className='headerSearchText' onClick={() => setShowOptions(!showOptions)} >{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
{showOptions && (
<div className='options'>
  <div className='optionItem'>
          <span className='optionText'>Adult</span>
          <div className='optionCount'>
          <button className='optionCounterBtn'  disabled={options.adult < 1} onClick={() => handleOption('adult','d')}>-</button>
          <span className='optionCount' >{options.adult}</span>
          <button className='optionCounterBtn' onClick={() => handleOption('adult','i')}>+</button>
          </div>
  </div>

  <div className='optionItem'>
          <span className='optionText'>Children</span>
          <div className='optionCount'>
          <button className='optionCounterBtn' disabled={options.children < 1} onClick={() => handleOption('children','d')}>-</button>
          <span className='optionCount'>{options.children}</span>
          <button className='optionCounterBtn' onClick={() => handleOption('children','i')}>+</button>
          </div>
  </div>
  <div className='optionItem'>
          <span className='optionText'>Room</span>
          <div className='optionCount'>
          <button className='optionCounterBtn' disabled={options.room < 1} onClick={() => handleOption('room','d')}>-</button>
          <span className='optionCount'>{options.room}</span>
          <button className='optionCounterBtn' onClick={() => handleOption('room','i')}>+</button>
          </div>
  </div>
</div>)}
            </div>
            <div className='headerSearchItem'>
       <button className='headerBtn' onClick={() => handleSearch()} >Search </button>
        </div>
  </div></>
}
        </div>
    </div>
  )
}

export default Header