import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import shockwave1 from '../../public/shockwave1.jpg';
import oshot1 from '../../public/oshot1.jpg';
import chair1 from '../../public/chair1.jpg';
import chair3 from '../../public/chair3.jpg';
import pshot1 from '../../public/pshot1.jpg';



const PshotServices = () => {

  return (
    
    <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

    <p className={`text-[5vh] text-gold1 text-center font-header`}>Related Treatments</p>
    
    <div className={`flex flex-col md:flex-row w-full justify-between mt-[2vh] md:min-h-[65vh] `}>
    
        
        
        <div   className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <Link href="/o-concept-chair-in-london">
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={chair3}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold1 text-[5.5vh] text-left font-header`}>O-Concept Chair</h1>
                    <h1 className={` text-gold1 text-[5.5vh] text-left font-header`}>For Him</h1>
                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  items-center py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>The O Concept Chair for Him is a state-of-the-art non-invasive treatment designed to enhance male sexual wellbeing and performance. It uses cutting-edge technology to stimulate pelvic muscles and improve blood flow. This revolutionary approach not only aids in optimizing sexual health, but also promotes an overall improvement in wellness.</p>
                
            </div>
            {/* <Link to={`/breast-augmentation`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white  md:mt-[0px]`}>Read More</button> */}
        </Link>
        </div>
        
    
        <div   className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <Link href="/">
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={pshot1}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold1 text-[5.5vh] text-left font-header`}>The P-Shot</h1>
                    <h1 className={` text-gold1 text-[5.5vh] text-left font-header`}>Penis PRP</h1>
                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  items-center py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>P-Shot® is a part of the ground-breaking treatment, The O Concept™. The P-Shot® procedure works by using the body’s natural ability to heal andrejuvenate itself by injecting growth factor rich Platelet Rich Plasma (PRP) into the penis to stimulate a regenerative process.</p>
                
            </div>
            {/* <Link to={`/breast-augmentation`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white  md:mt-[0px]`}>Read More</button> */}
        </Link>
        </div>
        
    
        <div  className={` flex flex-col  bg-gold1   w-[100%] md:w-[29%] mt-[10vh] md:mt-[0px] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <Link href="/penis-enlargement-in-london">
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
        <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={oshot1}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5.5vh] text-left font-header`}>Penis</h1>
                    <h1 className={` text-gold2 text-[5.5vh] text-left font-header`}>Enlargement</h1>
                </div>
            </div>
            <div className={` flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Penis enlargement with fat, also known as penile augmentation or phalloplasty, is a cosmetic procedure that involves harvesting fat from other parts of the body, such as the abdomen, thighs, or buttocks, and transferring it into the penile area. This innovative treatment aims to increase the size and shape of the natural penis.</p>
                
            </div>
            {/* <Link to={`/breast-reduction`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            
        </Link>
        </div>
        
        
    
        
    
        
    </div>
    
    
    </div>
  )
}

export default PshotServices