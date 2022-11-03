import React from 'react'
import Footer from '../Components/Footer';
import TypingBox from '../Components/TypingBox';
import Header from "../Components/Header";
import GlobalStyles from '../Styles/Global'

const HomePage = () => {

  return (
    
      <div className="canvas">
        <GlobalStyles />
          <Header/>
          <TypingBox/>
          <Footer/>
        </div>
  )
}

export default HomePage