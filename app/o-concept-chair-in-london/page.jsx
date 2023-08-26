import React from 'react'
import dynamic from 'next/dynamic'
const OconceptInfo = dynamic(() => import ('../components/OconceptInfo'))
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookNow from '../components/BookNow'
import Awards from '../components/Awards'
import Media from '../components/Media'
import YoutubeTestimonials from '../components/YoutubeTestimonials'
import WakilSummary from '../components/WakilSummary'
import TrustPilotSlider from '../components/TrustPilotSlider'
import FooterBook from '../components/FooterBook'

const ChairDetails = dynamic(() => import('./ChairDetails'))
import ChairBenefits from './ChairBenefits'
// import ChairDetails from './ChairDetails'
import ChairFaqs from './ChairFaqs'
import ChairImage from './ChairImage'
import ChairOpening from './ChairOpening'
import ChairServices from './ChairServices'
import ChairSummary from './ChairSummary'
import ChairTreated from './ChairTreated'
import ChairVideo from './ChairVideo'

export const metadata = {
  title: 'Discover the O Concept Chair in London | P-Shot',
  description : 'Discover the ultimate O Concept Chair experience in London with Dr. Sherif Wakil. To get the best O Concept Treatment, call +44 (0)20 3006 8459.',
}

const Chair = () => {
  return (
    <div className={`bg- w-full`}>

      {/* <div className={`hidden md:fixed fixed z-20 `}>
            <video src={vampire_Chair_new_intro} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <ChairImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="chair_opening" className={`flex  w-full  justify-center mt-20`}>
                <ChairOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <ChairDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <ChairBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <ChairTreated/>
              </div>
              
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <ChairVideo/>
              </div>
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <ChairSummary/>
              </div>
              
              {/* <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <ChairCompare/>
              </div> */}
              <div className={`flex  w-full md:w-[70%] md:mx-auto items-center mt-[7vh]`}>
                  <ChairFaqs/>
              </div>
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <OconceptInfo/>
              </div>
             
              {/* <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <ChairFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <ChairCompare/>
                </div>
              </div> */}
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
                  <ChairServices/>
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

export default Chair