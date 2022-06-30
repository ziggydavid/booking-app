import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'




const List = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
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
            <input type="text" />
</div>
<div className='lItem'>
            <label>Check in date</label>
            <input type="text" />
</div>
          </div>
          <div className='lResult'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default List