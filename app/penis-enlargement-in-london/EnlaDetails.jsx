import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const BreastLiftDetails = () => {
  return (
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>The O Concept™ understands that every man's sexual wellness needs are unique. That's why we offer a tailored and specialized combination of sexual aesthetic treatments to address male sexual dysfunction effectively.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>The decision to enhance and enlarge your penis is a personal one. With the use of soft tissue fillers, we provide a long-lasting solution without the potential risks associated with permanent fillers or implants. Our approach ensures a safe and non-invasive experience.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>The soft tissue or dermal fillers we use are based on hyaluronic acid (HA), a natural substance produced by the body. HA acts as an internal moisturizer, offering hydration and plumpness to all layers of skin tissue. By injecting a thick, synthetic hyaluronic acid gel into the penis, we can achieve immediate augmentation of the shaft's girth. This also enhances hydration, resulting in a plumper appearance in both flaccid and erect states.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Using a cannula through a single injection point, we evenly distribute the HA gel in a fan-shaped manner to ensure uniform coverage and an overall increase in circumference.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>The amount of filler used depends on the desired girth enlargement while still achieving a natural-looking result. Typically, initial treatments involve the use of 15-20 ml of product.</p>
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
        <video src="/fat_cells.mp4" autoPlay loop muted className={` object-cover w-[100%] h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>

        <div className={`flex flex-col md:hidden items-center`}>
            <p className={`flex text-gold1 text-[6vh] text-center font-header`}>How does it work?</p>
            {/* <video src={fat_cells} autoPlay loop muted playsInline className={`w-[100%]`} ></video> */}
            <video src="/fat_cells.mp4" autoPlay loop muted playsInline className={` object-cover h-[100%]`}></video>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>The O Concept™ understands that every man's sexual wellness needs are unique. That's why we offer a tailored and specialized combination of sexual aesthetic treatments to address male sexual dysfunction effectively.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The decision to enhance and enlarge your penis is a personal one. With the use of soft tissue fillers, we provide a long-lasting solution without the potential risks associated with permanent fillers or implants. Our approach ensures a safe and non-invasive experience.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The soft tissue or dermal fillers we use are based on hyaluronic acid (HA), a natural substance produced by the body. HA acts as an internal moisturizer, offering hydration and plumpness to all layers of skin tissue. By injecting a thick, synthetic hyaluronic acid gel into the penis, we can achieve immediate augmentation of the shaft's girth. This also enhances hydration, resulting in a plumper appearance in both flaccid and erect states.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Using a cannula through a single injection point, we evenly distribute the HA gel in a fan-shaped manner to ensure uniform coverage and an overall increase in circumference.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The amount of filler used depends on the desired girth enlargement while still achieving a natural-looking result. Typically, initial treatments involve the use of 15-20 ml of product.</p>
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default BreastLiftDetails