import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import format from 'date-fns/format'
import { DateRange } from 'react-date-range';
import SearchList from '../searchList/SearchList';

const List = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  
  return (
    <div>
      <Header type={'List'}/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lTitle'>Search</h1>

          <div className='lItem'>
            <label>Destination</label>
            <input placeholder={destination} type="text" />
</div>
<div className='lItem'>
            <label>Check in date</label>
            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
           {openDate &&  <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  minDate={new Date()}
/>   
}
</div>
<div className='lItem'>
    <label>Options</label>
    <div className='lOptions'>
    <div className='lOptionItem'>
      <span className='lOptionText'>
        Min price <small>per night</small>
      </span>
      <input type="number" className='lOptionInput' /> 
    </div>
    <div className='lOptionItem'>
      <span className='lOptionText'>
        Max price <small>per night</small>
      </span>
      <input type="number" className='lOptionInput' /> 
    </div>
   
    <div className='lOptionItem'>
      <span className='lOptionText'>
        Adult
      </span>
      <input type="number" className='lOptionInput' placeholder={options.adult} /> 
    </div>
    <div className='lOptionItem'>
      <span className='lOptionText'>
        Children 
      </span>
      <input type="number" className='lOptionInput' placeholder={options.children}  /> 
    </div>
    <div className='lOptionItem'>
      <span className='lOptionText'>
         Room
      </span>
      <input type="number" className='lOptionInput' placeholder={options.room}  /> 
    </div>
    </div>
</div>
<button >Search</button>
          </div>
          <div className='lResult'>
      <SearchList/>
      <SearchList/>
      <SearchList/>
      <SearchList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List