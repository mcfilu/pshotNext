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

const EnlaDetails = dynamic(() => import('./EnlaDetails'))
import EnlaBenefits from './EnlaBenefits'
import EnlaCompare from './EnlaCompare'
// import EnlaDetails from './EnlaDetails'
import EnlaFaqs from './EnlaFaqs'
import EnlaImage from './EnlaImage'
import EnlaOpening from './EnlaOpening'
import EnlaServices from './EnlaServices'
import EnlaSummary from './EnlaSummary'
import EnlaTreated from './EnlaTreated'
import EnlaVideo from './EnlaVideo'

export const metadata = {
  title: 'Penis Enlargement in London |London Penile Enlargement | P-Shot®',
  description : 'Experience the best London penile enlargement treatment from Dr. Sherif Wakil. Call +44 (0)20 3006 8459 for a free consultation for penis enlargement in London',
}

const Enla = () => {
  return (
    <div className={`bg- w-full`}>

      {/* <div className={`hidden md:fixed fixed z-20 `}>
            <video src={vampire_Enla_new_intro} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <EnlaImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="enla_opening" className={`flex  w-full  justify-center mt-20`}>
                <EnlaOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <EnlaDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <EnlaBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <EnlaTreated/>
              </div>
              
              {/* <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <EnlaVideo/>
              </div> */}
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <EnlaSummary/>
              </div>
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <EnlaCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <EnlaFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <EnlaFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <EnlaCompare/>
                </div>
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
                  <EnlaServices/>
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

export default Enla