import React from 'react';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../propertyList/propertyList';
import FeaturedLodge from '../../components/featuredLodge/FeaturedLodge';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';




const Home = () => {
  return (
    <>

    <Header/>
    <div className='homecon'>
    <Featured/>
<h1 className='homeTitle'>Browse by property type</h1>
<PropertyList/>
<h1 className='homeTitle'>Homes guests love</h1>
<FeaturedLodge/>
<MailList/>
<Footer/>
    </div>
    </>
  )
}

export default Home