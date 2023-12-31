import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import shockwave1 from '../../public/shockwave1.jpg';
import oshot1 from '../../public/oshot1.jpg';
import chair1 from '../../public/chair1.jpg';
import chair3 from '../../public/chair3.jpg';
import ed from '../../public/ed.jpg';
import renova from '../../public/renova.jpg';
import diet from '../../public/diet.jpg';



const OconceptServices = () => {
    
  return (
    
    <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

    <p className={`text-[5vh] text-gold1 text-center font-header`}>O-Concept Protocol Treatments</p>
    
    <div className={`flex flex-col md:flex-row w-full justify-between mt-[2vh] md:min-h-[65vh] `}>
    
        
        
        <div   className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <Link href="/o-concept-chair-in-london">
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={chair3}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold1 text-[5.5vh] text-left font-header`}>O-Concept Chair</h2>
                    <h2 className={` text-gold1 text-[5.5vh] text-left font-header`}>For Him</h2>
                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  items-center py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>The O Concept Chair for Him is a state-of-the-art non-invasive treatment designed to enhance male sexual wellbeing and performance. It uses cutting-edge technology to stimulate pelvic muscles and improve blood flow. This revolutionary approach not only aids in optimizing sexual health, but also promotes an overall improvement in wellness.</p>
                
            </div>
            {/* <Link to={`/breast-augmentation`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white  md:mt-[0px]`}>Read More</button> */}
        </Link>
        </div>
        
    
        <div  className={` flex flex-col items-center bg-gold1 mt-[10vh] md:mt-[0px] w-[100%] md:w-[29%] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <Link href="/shockwave-therapy-in-london">
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black `}>
        <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={shockwave1}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold2 text-[5.5vh] text-left font-header`}>O-Concept Shockwave</h2>
                    <h2 className={` text-gold2 text-[5.5vh] text-left font-header`}>For Him</h2>
                </div>
            </div>
            <div className={`relative items-center flex flex-col w-full  py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>The O-Concept Shockwave for him is an advanced procedure designed to address various concerns related to male sexual wellness. This non-invasive treatment utilizes shockwave technology to stimulate blood flow and tissue regeneration in the penile area.</p>
                
                
            </div>
            {/* <Link to={`/breast-fat-enlargement`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh] md:mt-[0px]`}>Read More</button> */}
        </Link>
        </div>
        
    
        <div  className={` flex flex-col  bg-gold1   w-[100%] md:w-[29%] mt-[10vh] md:mt-[0px] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <Link href="/penis-enlargement-in-london">
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
        <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={oshot1}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold2 text-[5.5vh] text-left font-header`}>Penis</h2>
                    <h2 className={` text-gold2 text-[5.5vh] text-left font-header`}>Enlargement</h2>
                </div>
            </div>
            <div className={` flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Penis enlargement with fat, also known as penile augmentation or phalloplasty, is a cosmetic procedure that involves harvesting fat from other parts of the body, such as the abdomen, thighs, or buttocks, and transferring it into the penile area. This innovative treatment aims to increase the size and shape of the natural penis.</p>
                
            </div>
            {/* <Link to={`/breast-reduction`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            
        </Link>
        </div>
        
        
    
        
    
        
    </div>
    <div className={`flex flex-col md:flex-row w-full justify-between mt-[2vh] md:min-h-[65vh] mt-[5vh]`}>
    
        
        
        <div  className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <a href="https://www.drswclinics.co.uk">
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={ed}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold1 text-[5.5vh] text-left font-header`}>O-Concept</h2>
                    <h2 className={` text-gold1 text-[5.5vh] text-left font-header`}>Endo-test</h2>
                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  items-center py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Endo-test works by encouraging the body to naturally increase its production of testosterone in the body. This can produce particularly positive results in sexual functioning. The O concept Endo-test is exclusive to Dr. SW Clinics and has been specially developed by Dr. Wakil himself.</p>
                
            </div>
            {/* <Link to={`/breast-augmentation`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white  md:mt-[0px]`}>Read More</button> */}
        </a>
        </div>
        
    
        <div className={` flex flex-col items-center bg-gold1 mt-[10vh] md:mt-[0px] w-[100%] md:w-[29%] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <a href="https://www.drswclinics.co.uk">
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
        <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={renova}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold2 text-[5.5vh] text-left font-header`}>Renova</h2>
                    {/* <h2 className={` text-gold2 text-[5.5vh] text-left font-header`}>For Him</h2> */}
                </div>
            </div>
            <div className={`relative items-center flex flex-col w-full  py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>A cutting edge innovative, non-invasive, hands-free technology that stimulates the
treated tissue to grow new micro blood vessels, which research suggests it
increases blood supply of the penis to improve erection quality, with no known side-
effects, by using linear soundwave technology.</p>
                
                
            </div>
            {/* <Link to={`/breast-fat-enlargement`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh] md:mt-[0px]`}>Read More</button> */}
        </a>
        </div>
        
    
        <div  className={` flex flex-col  bg-gold1   w-[100%] md:w-[29%] mt-[10vh] md:mt-[0px] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <a href="https://www.drswclinics.co.uk">
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
        <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={diet}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold2 text-[5.5vh] text-left font-header`}>Diet</h2>
                    <h2 className={` text-gold2 text-[5.5vh] text-left font-header`}>Revision</h2>
                </div>
            </div>
            <div className={` flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>We will not only highlight the importance of general wellbeing and health, but also
advise you on specific aspects of nutrition that has a direct effect on sexual
performance, this will enhance the benefits of the treatment. Dr Wakil has selected
specific nutritionists to ensure that you receive the best advice.</p>
                
            </div>
            {/* <Link to={`/breast-reduction`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            
        </a>
        </div>
        
        
    
        
    
        
    </div>
    
    
    </div>
  )
}

export default OconceptServices