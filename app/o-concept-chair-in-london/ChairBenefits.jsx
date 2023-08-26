import React from 'react'
import benefits2 from '../../public/benefits2.jpg'
import Link from 'next/link'
import Image from 'next/image'

const ChairBenefits = () => {
  return (
    <div className={`flex w-full flex-row  md:min-h-[55vh]   `}>
        <div className={`hidden md:flex w-[45%]  flex  relative`}>
            {/* <video src={breastliftvideo} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
            <Image src={benefits2} className={`w-full h-full object-cover`} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
        </div>
        <div className={`hidden md:flex flex flex-col w-[55%] p-[2vh]  items-center`}>
            <h1 className={`text-gold1 text-[5vh] text-center font-header`}>O-Concept Chair Benefits</h1>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh] font-main`}>By harnessing the power of advanced technology, the O Concept Chair offers a wide range of benefits by targeting pelvic muscle strength and blood circulation:</p>
            <ul className={`text-white text-[2.1vh] font-poppins w-full items-left`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Experience improved stamina and endurance, leading to heightened sexual performance and longer-lasting encounters.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Enjoy increased sensation, sex drive, and stamina for a more fulfilling sexual experience.</li> */}
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>The increased blood flow facilitated by the O Concept Chair can potentially contribute to better prostate health, promoting overall wellness in this vital aspect of male sexual health.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>With improved sexual performance and heightened sensations, regain your confidence and experience increased satisfaction during sexual encounters.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>The O Concept Chair provides relief and improvement in symptoms related to pelvic floor dysfunction and other pelvic health issues, helping to restore balance and functionality.</li>
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></Link>
        </div>
        

      <div className={`md:hidden flex flex-col items-center`}>
      <h1 className={`text-gold1 text-[5vh] text-center font-header`}>O-Concept Chair Benefits</h1>
      {/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
      <div className={`flex w-full h-[30vh] relative`}> 
        <Image src={benefits2} className={`w-full h-full object-cover `} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
      </div>
      <p className={`text-white font-poppins text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh] font-main`}>By harnessing the power of advanced technology, the O Concept Chair offers a wide range of benefits by targeting pelvic muscle strength and blood circulation:</p>
            <ul className={`text-white text-[2.1vh] font-poppins pl-[1vh]`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Experience improved stamina and endurance, leading to heightened sexual performance and longer-lasting encounters.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Enjoy increased sensation, sex drive, and stamina for a more fulfilling sexual experience.</li> */}
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>The increased blood flow facilitated by the O Concept Chair can potentially contribute to better prostate health, promoting overall wellness in this vital aspect of male sexual health.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>With improved sexual performance and heightened sensations, regain your confidence and experience increased satisfaction during sexual encounters..</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>The O Concept Chair provides relief and improvement in symptoms related to pelvic floor dysfunction and other pelvic health issues, helping to restore balance and functionality.</li>
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></Link>
      </div>
    
    </div>
  )
}

export default ChairBenefits