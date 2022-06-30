import React from 'react';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../propertyList/propertyList';
import FeaturedAp from '../../components/featuredApartment/FeaturedAp';

const Home = () => {
  return (
    <>

    <Header/>
    <div className='homecon'>
    <Featured/>
<h1 className='homeTitle'>Browse by property type</h1>
<PropertyList/>
<h1 className='homeTitle'>Homes guests love</h1>
<FeaturedAp/>
    </div>
    </>
  )
}

export default Home