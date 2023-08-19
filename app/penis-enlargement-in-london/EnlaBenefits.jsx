import React from 'react'
import benefits2 from '../../public/benefits2.jpg'
import Link from 'next/link'
import Image from 'next/image'

const PshotBenefits = () => {
  return (
    <div className={`flex w-full flex-row  md:min-h-[55vh]   `}>
        <div className={`hidden md:flex w-[45%]  flex  relative`}>
            {/* <video src={breastliftvideo} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
            <Image src={benefits2} className={`w-full h-full object-cover`} object-fit="cover" fill={true} alt=""></Image>
        </div>
        <div className={`hidden md:flex flex flex-col w-[55%] p-[2vh]  items-center`}>
            <h1 className={`text-gold1 text-[5vh] text-center font-header`}>Penis Enlargement Benefits</h1>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh] font-main`}>Penis Augmentation with Soft Tissue Fillers at Dr SW Clinics provides an exceptional solution for those seeking comprehensive enhancement in sexual wellness, offering a range of remarkable benefits, including:</p>
            <ul className={`text-white text-[2.1vh] font-poppins w-full items-left`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Soft tissue fillers can lead to a noticeable increase in both the girth and length of the penis, contributing to a more substantial and satisfying appearance.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>A heightened sense of self-assurance can result from the positive changes in physical appearance, leading to increased confidence in intimate situations.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>The augmentation can positively impact sexual performance by providing greater stimulation and satisfaction for both partners.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Penis augmentation with soft tissue fillers is a non-surgical procedure, reducing the need for invasive surgery and associated risks.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>The procedure can be tailored to your specific needs and desired outcome, ensuring a customized and natural-looking enhancement.</li>
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></Link>
        </div>
        

      <div className={`md:hidden flex flex-col items-center`}>
      <h1 className={`text-gold1 text-[5vh] text-center font-header`}>Penis Enlargement Benefits</h1>
      {/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
      <div className={`flex w-full h-[30vh] relative`}> 
        <Image src={benefits2} className={`w-full h-full object-cover `} object-fit="cover" fill={true} alt=""></Image>
      </div>
      <p className={`text-white font-poppins text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh] font-main`}>Penis Augmentation with Soft Tissue Fillers at Dr SW Clinics provides an exceptional solution for those seeking comprehensive enhancement in sexual wellness, offering a range of remarkable benefits, including:</p>
            <ul className={`text-white text-[2.1vh] font-poppins pl-[1vh]`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Soft tissue fillers can lead to a noticeable increase in both the girth and length of the penis, contributing to a more substantial and satisfying appearance.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>A heightened sense of self-assurance can result from the positive changes in physical appearance, leading to increased confidence in intimate situations.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>The augmentation can positively impact sexual performance by providing greater stimulation and satisfaction for both partners.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Penis augmentation with soft tissue fillers is a non-surgical procedure, reducing the need for invasive surgery and associated risks.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>The procedure can be tailored to your specific needs and desired outcome, ensuring a customized and natural-looking enhancement.</li>
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></Link>
      </div>
    
    </div>
  )
}

export default PshotBenefits