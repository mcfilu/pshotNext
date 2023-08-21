import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const ShockDetails = () => {
  return (
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>
Experience the transformative O Concept™ protocol designed to restore your confidence and enhance your sexual enjoyment. With a personalized approach that combines revolutionary techniques and advanced technologies, we address your unique concerns. One highly effective treatment for erectile dysfunction is the O Concept™ Extracorporeal Shockwave Therapy.

</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>This cutting-edge therapy involves delivering low-intensity extracorporeal shockwaves to the shaft and crura of the penis, stimulating the formation of new blood vessels and significantly improving blood supply for stronger erections. </p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Extensive research shows its effectiveness, with up to 84% of men experiencing positive results. In fact, a study revealed that 50% of treated men achieved sexual performance without medication within the first month following treatment. Using a wand-like device, short pulses of focused shockwaves are applied at a low intensity, promoting the formation of new blood vessels.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>By increasing blood supply, the O Concept™ therapy helps you attain and sustain an erection, leading to improved sexual performance and satisfaction. Rediscover the joy of intimate moments and embrace a more fulfilling and confident sexual experience with the O Concept™ Extracorporeal Shockwave Therapy.</p>
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
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>
Experience the transformative O Concept™ protocol designed to restore your confidence and enhance your sexual enjoyment. With a personalized approach that combines revolutionary techniques and advanced technologies, we address your unique concerns. One highly effective treatment for erectile dysfunction is the O Concept™ Extracorporeal Shockwave Therapy.

</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>This cutting-edge therapy involves delivering low-intensity extracorporeal shockwaves to the shaft and crura of the penis, stimulating the formation of new blood vessels and significantly improving blood supply for stronger erections. </p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Extensive research shows its effectiveness, with up to 84% of men experiencing positive results. In fact, a study revealed that 50% of treated men achieved sexual performance without medication within the first month following treatment. Using a wand-like device, short pulses of focused shockwaves are applied at a low intensity, promoting the formation of new blood vessels.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>By increasing blood supply, the O Concept™ therapy helps you attain and sustain an erection, leading to improved sexual performance and satisfaction. Rediscover the joy of intimate moments and embrace a more fulfilling and confident sexual experience with the O Concept™ Extracorporeal Shockwave Therapy.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalization and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p> */}
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default ShockDetails