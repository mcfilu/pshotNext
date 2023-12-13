import React from 'react'
import Link from 'next/link'

const OconceptInfo = () => {
  return (
    <div className={`flex w-full flex-row  md:min-h-[55vh]   `}>
        <div className={`hidden md:flex w-[45%]  flex  `}>
        <video src={"/o-concept-animation.webm"} autoPlay loop muted className={` object-contain h-[100%] w-[100%]`}></video>
            {/* <img src={o_concept_animation} className={`w-full h-full object-cover`}></img> */}
        </div>
        <div className={`hidden md:flex flex flex-col w-[55%] p-[2vh]  items-center`}>
            <h2 className={`text-gold1 text-[5vh] text-center font-header`}>O-Concept™ for Him</h2>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh] font-main`}>The <Link href="/o-concept-treatment-in-london/" className="text-gold2 underline">The O Concept™</Link> offers a bespoke treatment plan for erectile dysfunction, premature ejaculation, or Peyronie's disease. Tailored to each patient's specific condition, it ensures optimal results. What sets it apart is the unique combination of treatments in a precise order and intervals, addressing individual needs.</p>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh] font-main`}>Dr. Sherif Wakil, renowned as a leading expert in Sexual Aesthetics, has received numerous national and global awards for his groundbreaking work in sexual and penis rehabilitation. With his expertise and the title of "God Father of Sexual Aesthetics," patients can trust in his exceptional knowledge and experience.</p>
            
            <Link href="/o-concept-treatment-in-london"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Check O-Concept Details</button></Link>

              
        </div>
        

      <div className={`md:hidden flex flex-col items-center`}>
      <h2 className={`text-gold1 text-[5vh] text-center font-header`}>O-Concept™ for Him</h2>
      {/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
      <video src={"/o-concept-animation.webm"} autoPlay loop muted playsInline className={` object-cover h-[100%] w-[100%]`}></video>
      <p className={`text-white font-poppins text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh] font-main`}>The <Link href="/o-concept-treatment-in-london/" className="text-gold2 underline">The O Concept™</Link> offers a bespoke treatment plan for erectile dysfunction, premature ejaculation, or Peyronie's disease. Tailored to each patient's specific condition, it ensures optimal results. What sets it apart is the unique combination of treatments in a precise order and intervals, addressing individual needs.</p>
      <p className={`text-white font-poppins text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh] font-main`}>Dr. Sherif Wakil, renowned as a leading expert in Sexual Aesthetics, has received numerous national and global awards for his groundbreaking work in sexual and penis rehabilitation. With his expertise and the title of "God Father of Sexual Aesthetics," patients can trust in his exceptional knowledge and experience.</p>
            
            <Link href="/o-concept-treatment-in-london"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Check O-Concept Details</button></Link>
      </div>
    
    </div>
  )
}

export default OconceptInfo