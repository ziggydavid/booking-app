import React from 'react'
import ApartmentIcon from '@material-ui/icons/Apartment';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import KingBedIcon from '@material-ui/icons/KingBed';
import LocalTaxiTwoToneIcon from '@material-ui/icons/LocalTaxiTwoTone';



const Header = () => {
  return (
    <div className='header'>
        <div className='headerContainer'>
        <div className='headerList'>
            <div className='headerListItem'>
<ApartmentIcon/><span>Stays</span>
            </div>
        </div>
        <div className='headerList'>
            <div className='headerListItem'>
<AirplanemodeActiveIcon/><span>Flights</span>
            </div>
        </div>
        <div className='headerList'>
            <div className='headerListItem'>
<DriveEtaIcon/><span>Car Rentals</span>
            </div>
        </div>
        <div className='headerList'>
            <div className='headerListItem'>
<KingBedIcon/><span>Attractions</span>
            </div>
        </div>
        <div className='headerList'>
            <div className='headerListItem'>
<LocalTaxiTwoToneIcon/><span>Airport Taxis</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header