import React from 'react'

function Featured() {
  return (
    <>
    <div className='featured'>
        <div className='featuredItem'>
            <img src="https://cf.bstatic.com/xdata/images/city/square250/822312.jpg?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o=" alt='' className='imgFeatured'/>
            <div className='featuredTitles'>
                <h1>Abuja</h1>
                <h2>223 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src="https://cf.bstatic.com/xdata/images/city/square250/684500.jpg?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o=" alt='' className='imgFeatured'/>
            <div className='featuredTitles'>
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src="https://cf.bstatic.com/xdata/images/city/square250/661041.jpg?k=9b623dbbbf3f001248b38d9e75f2a71f985b44436b2fd871d2e6153c3d76a9be&o=" alt='' className='imgFeatured'/>
            <div className='featuredTitles'>
                <h1>Lekki</h1>
                <h2>68 properties</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default Featured