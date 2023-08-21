import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const BreastLiftDetails = () => {
  return (
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>The P-Shot®, a revolutionary treatment for erectile dysfunction and low libido, offers natural stimulation for genital rejuvenation and activation of the male orgasm system. This innovative solution addresses a wide range of causes for these conditions, including prostate cancers and conditions, aging, and stress. With nearly half of the UK's male population aged between 40 and 70 experiencing some degree of erectile dysfunction, the P-Shot® has emerged as a popular and highly effective method to improve overall genital health.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Erectile dysfunction can stem from various factors, including vasculogenic conditions affecting blood flow to the penis (such as cardiovascular disease, high blood pressure, diabetes, and raised cholesterol), neurogenic conditions affecting the nervous system (like multiple sclerosis, stroke, Parkinson's disease, spinal injuries/disorders, and diabetes), hormonal conditions, anatomical conditions affecting the penis structure (like Peyronie's disease), surgery and radiation therapy for rectal, prostate, or bladder cancer, penis injuries, prescribed drugs' side effects, excessive alcohol consumption, and recreational drug use.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>The P-Shot® procedure harnesses the body's natural healing and rejuvenating abilities by injecting Platelet Rich Plasma (PRP), rich in growth factors, into the penis. Similar to the technique used for the Vampire Facelift®, a small amount of blood is taken from the arm and processed in a centrifuge to extract the plasma. This plasma, abundant in cell-regenerating growth factors, is then injected into the penis, triggering stem cells to increase blood flow and promote the growth of healthier tissue.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Named after the Greek god of fertility, the Priapus Shot®, or P-Shot®, is an innovative technique specifically designed to rejuvenate the penis, enhance sensation, and improve function. By utilizing Platelet Rich Plasma (PRP), this pioneering treatment offers a promising solution for individuals seeking to improve their sexual health and well-being.</p>
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
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>The P-Shot®, a revolutionary treatment for erectile dysfunction and low libido, offers natural stimulation for genital rejuvenation and activation of the male orgasm system. This innovative solution addresses a wide range of causes for these conditions, including prostate cancers and conditions, aging, and stress. With nearly half of the UK's male population aged between 40 and 70 experiencing some degree of erectile dysfunction, the P-Shot® has emerged as a popular and highly effective method to improve overall genital health.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Erectile dysfunction can stem from various factors, including vasculogenic conditions affecting blood flow to the penis (such as cardiovascular disease, high blood pressure, diabetes, and raised cholesterol), neurogenic conditions affecting the nervous system (like multiple sclerosis, stroke, Parkinson's disease, spinal injuries/disorders, and diabetes), hormonal conditions, anatomical conditions affecting the penis structure (like Peyronie's disease), surgery and radiation therapy for rectal, prostate, or bladder cancer, penis injuries, prescribed drugs' side effects, excessive alcohol consumption, and recreational drug use.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The P-Shot® procedure harnesses the body's natural healing and rejuvenating abilities by injecting Platelet Rich Plasma (PRP), rich in growth factors, into the penis. Similar to the technique used for the Vampire Facelift®, a small amount of blood is taken from the arm and processed in a centrifuge to extract the plasma. This plasma, abundant in cell-regenerating growth factors, is then injected into the penis, triggering stem cells to increase blood flow and promote the growth of healthier tissue.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Named after the Greek god of fertility, the Priapus Shot®, or P-Shot®, is an innovative technique specifically designed to rejuvenate the penis, enhance sensation, and improve function. By utilizing Platelet Rich Plasma (PRP), this pioneering treatment offers a promising solution for individuals seeking to improve their sexual health and well-being.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalization and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p> */}
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default BreastLiftDetails