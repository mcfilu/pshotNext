import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
const OconceptDetails = () => {
  

  return (
    <div className={` flex w-full flex-row     `}>
         
         

        <div className={`hidden md:flex w-[60%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-full   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>This ground-breaking concept has been created by renowned Dr Sherif Wakil who is a pioneer in the field of “Sexual Aesthetics” a terminology he devised himself. He has created a unique combination of treatments tailor made for each patient to treat Male &amp; Female Sexual Dysfunction.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Dr Wakil introduced the O-Shot® and P-Shot® treatments for male and female Sexual Rejuvenation with PRP (Platelets Rich Plasma), into Europe and the UK in early 2014. Since then he has adopted several other Non-Surgical cutting edge Sexual Rejuvenation procedures. By blending the latest, advanced technology, treatments and natural supplements he has developed the first worldwide set of unique protocols to ensure the very best results for each condition.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Treatments are bespoke to each patient, safe and with very little to no downtime. Dr Wakil is passionate about making a significant difference in people’s lives. His patients happiness and regaining their self-esteem are in fact his biggest incentive, to immerse himself in this field and constantly modify, enhance and accelerate his protocols. Over time he has refined and mastered the techniques which inspired him to create the amazing “O Concept”. Dr. Wakil said “The ‘O Concept’ is revolutionary. I wanted to bring together the latest technology and technical skill into one ultimate treatment. It is a very exciting time for the sexual aesthetics industry, finally years of study combined with innovative technology has meant that we are now able to offer patients a Safe and Effective treatments. The O Concept IS the future of ‘Sexual Aesthetics’.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>The O Concept™ takes a total wellbeing approach to sexual dysfunction, tailoring unique protocols designed for each patient’s condition.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalization and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p> */}
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh] font-main`}>Book Consultation</button></Link>
            </div>
            
            

            
        </div>

        <div className={`hidden md:flex w-[40%] h-[100%] flex items-center`}>
        <video src={"/o-concept-animation.mp4"} autoPlay loop muted className={` object-cover  w-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
            </div>
        

        <div className={`flex flex-col md:hidden items-center`}>
        <video src={"/o-concept-animation.mp4"} autoPlay loop muted playsInline className={` object-cover h-[100%] w-[100%]`}></video>
            <p className={`flex text-gold1 text-[6vh] text-center font-header`}>How does it work?</p>
        
             {/* <video ref={videoRef} src={o_concept_animation} autoPlay loop muted playsInline webkit-playsInline className={`w-[100%]`}></video> */}
             {/* <video src={o_concept_animation} autoPlay loop muted playsInline className={`w-[100%]`}></video> */}
            

            
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>This ground-breaking concept has been created by renowned Dr Sherif Wakil who is a pioneer in the field of “Sexual Aesthetics” a terminology he devised himself. He has created a unique combination of treatments tailor made for each patient to treat Male &amp; Female Sexual Dysfunction.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Dr Wakil introduced the O-Shot® and P-Shot® treatments for male and female Sexual Rejuvenation with PRP (Platelets Rich Plasma), into Europe and the UK in early 2014. Since then he has adopted several other Non-Surgical cutting edge Sexual Rejuvenation procedures. By blending the latest, advanced technology, treatments and natural supplements he has developed the first worldwide set of unique protocols to ensure the very best results for each condition.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Treatments are bespoke to each patient, safe and with very little to no downtime. Dr Wakil is passionate about making a significant difference in people’s lives. His patients happiness and regaining their self-esteem are in fact his biggest incentive, to immerse himself in this field and constantly modify, enhance and accelerate his protocols. Over time he has refined and mastered the techniques which inspired him to create the amazing “O Concept”. Dr. Wakil said “The ‘O Concept’ is revolutionary. I wanted to bring together the latest technology and technical skill into one ultimate treatment. It is a very exciting time for the sexual aesthetics industry, finally years of study combined with innovative technology has meant that we are now able to offer patients a Safe and Effective treatments. The O Concept IS the future of ‘Sexual Aesthetics’.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The O Concept™ takes a total wellbeing approach to sexual dysfunction, tailoring unique protocols designed for each patient’s condition.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalization and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p> */}
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default OconceptDetails