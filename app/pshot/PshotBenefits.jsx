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
            <h1 className={`text-gold1 text-[5vh] text-center font-header`}>P-Shot Benefits</h1>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh] font-main`}>The P-Shot offers a remarkable solution for individuals seeking long-term improvement in erectile dysfunction by effectively increasing blood flow to the penis. This innovative treatment can yield a multitude of benefits, such as:</p>
            <ul className={`text-white text-[2.1vh] font-poppins w-full items-left`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Experience firmer erections for improved sexual performance and increased satisfaction.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Enjoy increased sensation, sex drive, and stamina for a more fulfilling sexual experience.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Permanent Increase in Penis Size: Stimulate new tissue growth, leading to a permanent increase in penis girth and length when used with Dr SW Clinics' penis pump.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Straighten the penis in men with Peyronie's Disease, reducing discomfort and improving sexual function.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Alleviate symptoms such as white itchy patches on the genitals for improved comfort and well-being.</li>
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></Link>
        </div>
        

      <div className={`md:hidden flex flex-col items-center`}>
      <h1 className={`text-gold1 text-[5vh] text-center font-header`}>P-Shot Benefits</h1>
      {/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
      <div className={`flex w-full h-[30vh] relative`}> 
        <Image src={benefits2} className={`w-full h-full object-cover `} object-fit="cover" fill={true} alt=""></Image>
      </div>
      <p className={`text-white font-poppins text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh] font-main`}>The P-Shot offers a remarkable solution for individuals seeking long-term improvement in erectile dysfunction by effectively increasing blood flow to the penis. This innovative treatment can yield a multitude of benefits, such as:</p>
            <ul className={`text-white text-[2.1vh] font-poppins pl-[1vh]`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Experience firmer erections for improved sexual performance and increased satisfaction.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Enjoy increased sensation, sex drive, and stamina for a more fulfilling sexual experience.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Permanent Increase in Penis Size: Stimulate new tissue growth, leading to a permanent increase in penis girth and length when used with Dr SW Clinics' penis pump.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Straighten the penis in men with Peyronie's Disease, reducing discomfort and improving sexual function.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Alleviate symptoms such as white itchy patches on the genitals for improved comfort and well-being.</li>
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></Link>
      </div>
    
    </div>
  )
}

export default PshotBenefits