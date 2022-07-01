import React from 'react'

function SearchList() {
  return (
    <div className='searchItem'>
        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/65658534.webp?k=d72eeaae6172a27c47f11f3f5f1a45f803ac8fee1dff2fb49168a23e5948284b&o=&s=1" alt="" className='slImg'/>
        <div className='slDesc'>
            <h1 className='slTitle'>Ilunion Suites Madrid</h1>
            <div className='slLocation'><span className='slAddress'>Chamartín, Madrid</span><span className='slDistance'>&#8226; &nbsp; 4.5 km from center</span></div>
            <span className='slSubtitle'>Standard Double or Twin Room</span>
            <span className='slFeature'>Beds: 1 double or 2 twins</span>
            <span className='slCancelOp'>FREE cancellation • No prepayment needed</span>
            <span className='slCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span>
        </div>
        <div className='slDetails'>
            <div className='slRating'>
                <span>Excellent</span>
                <span className='rating'>8.9</span>
            </div>
            <div className='slDetailText'>
                    <span className='slPrice'>NGN&nbsp;108,715</span>
                    <span  className='slTaxOp'>Includes taxes and fees</span> 

                    <button className='slButton'>See Availability </button>
            </div>
                    </div>

    </div>
  )
}

export default SearchList