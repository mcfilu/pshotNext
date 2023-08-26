import React from 'react'
import dynamic from 'next/dynamic'
const OconceptInfo = dynamic(() => import ('./components/OconceptInfo'))
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookNow from './components/BookNow'
import Awards from './components/Awards'
import Media from './components/Media'
import YoutubeTestimonials from './components/YoutubeTestimonials'
import WakilSummary from './components/WakilSummary'
import TrustPilotSlider from './components/TrustPilotSlider'
import FooterBook from './components/FooterBook'

import OtherServices from './components/OtherServices'

const PshotDetails = dynamic(() => import('./pshot/PshotDetails'))
import PshotBenefits from './pshot/PshotBenefits'
import PshotCompare from './pshot/PshotCompare'
// import PshotDetails from './pshot/PshotDetails'
import PshotFaqs from './pshot/PshotFaqs'
import PshotImage from './pshot/PshotImage'
import PshotOpening from './pshot/PshotOpening'
import PshotSummary from './pshot/PshotSummary'
import PshotTreated from './pshot/PshotTreated'
import PshotVideo from './pshot/PshotVideo'

export const metadata = {
    title: 'Revitalize Your Intimacy with the P-Shot in London | P-Shot',
    description : 'Revitalize your life with the best P-Shot treatment in London by Dr. Sherif Wakil. Regain confidence and call +44 (0)20 3006 8459 now. Reclaim your vitality!',
}

const Pshot = () => {


  return (
    <div className={`bg- w-full`}>
    
        
        {/* <div className={`hidden md:flex fixed z-20 `}>
            <video src={pshot_vid} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <PshotImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="pshot_opening" className={`flex  w-full  justify-center mt-20`}>
                <PshotOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <PshotDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <PshotBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <PshotTreated/>
              </div>
              
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <PshotVideo/>
              </div>
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <PshotSummary/>
              </div>
              
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <PshotCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <PshotFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <PshotFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <PshotCompare/>
                </div>
              </div>
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <OconceptInfo/>
              </div>
              {/* <div className={`flex  w-full h-auto  justify-center items-center  mt-[7vh] `}>
                  
              </div> */}
              <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full  justify-center items-center `}>
                  <BookNow/>
              </div>
              
              
              
             
              
              
              <div className={`flex flex-col w-full  mt-[7vh]`}>
                  <TrustPilotSlider/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <OtherServices/>
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

export default Pshot