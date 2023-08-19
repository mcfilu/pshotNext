import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookNow from '../components/BookNow'
import Awards from '../components/Awards'
import Media from '../components/Media'
import WakilSummary from '../components/WakilSummary'
import FooterBook from '../components/FooterBook'

import OConceptTestimonials from './OConceptTestimonials'
import OconceptImage from './OconceptImage'
import OconceptServices from './OconceptServices'
import OconceptOpening from './OconceptOpening'
import OconceptVideo from './OconceptVideo'
import OconceptDetails from './OconceptDetails'

export const metadata = {
  title: 'O Concept Treatment in London | P-Shot',
  description : 'Experience the ultimate O Concept Treatment in London with Dr. Sherif Wakil, delivering exceptional results. Call +44 (0)20 3006 8459 today.',
}

const Oconcept = () => {
  return (
    <div className={`bg- w-full`}>

    {/* <div className={`hidden md:fixed fixed z-20 `}>
          <video src={vampire_Pshot_new_intro} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
      </div> */}

      <div className={`fixed z-10 `}>
          <Navbar/>
      </div>
      <div className={`fixed w-full bottom-0 left-0 z-20 `}>
          <FooterBook/>
      </div>
      <div className={`relative z-0 ` }>

              <OconceptImage/>

      </div>
      <div className="flex flex-col bg-black" >
      <div className={`flex flex-col justify-center mx-auto w-full`}>
            <div id="oconcept_opening" className={`flex  w-full  justify-center mt-20`}>
              <OconceptOpening/>
            </div>
            <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                <WakilSummary/>
            </div>
            <div className={`flex  w-full  justify-center  mt-[7vh]`}>
              <OconceptDetails/>
            </div>
            <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                <OconceptVideo/>
            </div>
           
            {/* <div className={`flex  w-full h-auto  justify-center items-center  mt-[7vh] `}>
                
            </div> */}
            <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
              <OconceptServices/>
            </div>
            <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
              <OConceptTestimonials/>
            </div>
            <div className={`flex  w-full  justify-center items-center mt-[7vh]`}>
                <BookNow/>
            </div>
            
            
            
           
            
            
            
            <div className={`flex flex-col  justify-center  my-[7vh]`}>
                  <div>
                      <Media/>
                  </div>
                  
                  <div className={`mt-[2vh]`}>
                      <Awards/>
                  </div>
              </div>
            

        </div>
      </div>
      <div className={`relative z-0 ` }>
        <Footer/>
      </div>
  </div>
  )
}

export default Oconcept