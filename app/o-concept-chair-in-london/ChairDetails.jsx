import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const ChairDetails = () => {
  return (
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>Introducing the groundbreaking O Concept™ Chair, a revolutionary device designed to simplify and enhance your pelvic floor exercise routine. This innovative chair harnesses the power of high-intensity focused electromagnetic (HIFEM) technology to stimulate and strengthen your pelvic floor muscles like never before. With an impressive 16,000 contractions in just 30 minutes, the O Concept™ Chair offers exceptional effectiveness compared to traditional exercises.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>One of the key advantages of the O Concept™ Chair is its ability to provide targeted support and guidance during your exercise sessions. Its ergonomic design ensures optimal positioning and engagement of the pelvic muscles, maximizing the results of your workouts and enabling you to achieve the best possible outcomes.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>By incorporating the O Concept™ Chair into your routine, you can experience a myriad of benefits that positively impact your overall well-being. Strengthening your pelvic muscles through regular use of the chair improves ejaculation control, allowing you to prolong and intensify pleasure during intimate moments. It also contributes to better erectile strength, enhancing your overall sexual performance and boosting your confidence.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Furthermore, the O Concept™ Chair empowers you to regain control over bladder function. By strengthening your pelvic floor muscles, you can prevent or alleviate issues such as urinary incontinence, ensuring that you can engage in daily activities without interruption or concern.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalization and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p> */}
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh] font-main`}>Book Consultation</button></Link>
            </div>

            {/* <div className={`flex flex-col w-[100%]  bg-opacity-70 rounded-[9px] my-[1vh]`}>

                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face by harnessing the natural healing powers of the human body to repair damaged skin and stimulate new skin cell growth.</p>
                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face.</p>
            </div>
            <p className=" h-[6vh] w-[12vw] bg-gold1 text-white text-[2.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
                url="https://calendly.com/nikekarta2/30min"


                rootElement={document.getElementById("root")}
                text="Book Consultation"
                textColor="#ffffff"
                color="#ffffff"
                /></p> */}
        </div>
        <div className={`hidden md:flex w-[45%] h-[100%] flex items-center`}>
        <video src="/blood_cells.mp4" autoPlay loop muted className={` object-cover w-[100%] h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>

        <div className={`flex flex-col md:hidden items-center`}>
            <p className={`flex text-gold1 text-[6vh] text-center font-header`}>How does it work?</p>
            <video src="/blood_cells.mp4" autoPlay loop muted playsInline className={` object-cover h-[100%]`}></video>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>Introducing the groundbreaking O Concept™ Chair, a revolutionary device designed to simplify and enhance your pelvic floor exercise routine. This innovative chair harnesses the power of high-intensity focused electromagnetic (HIFEM) technology to stimulate and strengthen your pelvic floor muscles like never before. With an impressive 16,000 contractions in just 30 minutes, the O Concept™ Chair offers exceptional effectiveness compared to traditional exercises.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>One of the key advantages of the O Concept™ Chair is its ability to provide targeted support and guidance during your exercise sessions. Its ergonomic design ensures optimal positioning and engagement of the pelvic muscles, maximizing the results of your workouts and enabling you to achieve the best possible outcomes.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>By incorporating the O Concept™ Chair into your routine, you can experience a myriad of benefits that positively impact your overall well-being. Strengthening your pelvic muscles through regular use of the chair improves ejaculation control, allowing you to prolong and intensify pleasure during intimate moments. It also contributes to better erectile strength, enhancing your overall sexual performance and boosting your confidence.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Furthermore, the O Concept™ Chair empowers you to regain control over bladder function. By strengthening your pelvic floor muscles, you can prevent or alleviate issues such as urinary incontinence, ensuring that you can engage in daily activities without interruption or concern.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalization and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p> */}
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default ChairDetails