'use client'
import React, {useState} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Image from 'next/image';

import pshot1before from '../../public/pshot1before.jpeg';
import pshot1after from '../../public/pshot1after.jpeg';
import pshot_before2 from '../../public/pshot_before2.jpg';
import pshot_after2 from '../../public/pshot_after2.jpeg';
import pshot_before3 from '../../public/pshot_before3.jpeg';
import pshot_after3 from '../../public/pshot_after3.jpeg';
import pshot_before4 from '../../public/pshot_before4.jpeg';
import pshot_after4 from '../../public/pshot_after4.jpeg';

const PshotCompare = () => {
    const [hov1, setHov1] = useState(false);
    const [hov2, setHov2] = useState(false);
    const [hov3, setHov3] = useState(false);
    const [hov4, setHov4] = useState(false);
    const [hov5, setHov5] = useState(false);
    const [hov6, setHov6] = useState(false);
    const [hov7, setHov7] = useState(false);
    const [hov8, setHov8] = useState(false);
    const [hov9, setHov9] = useState(false);
    const [hov10, setHov10] = useState(false);
    
    const [vis3, set3] = useState(false);
    const [vis4, set4] = useState(false);
    const [vis5, set5] = useState(false);
    const [vis6, set6] = useState(false);
    const [vis7, set7] = useState(false);
    const [vis8, set8] = useState(false);
    const [vis9, set9] = useState(false);
    const [vis10, set10] = useState(false);
    const [buttonVis, setButton] = useState(true);
    
    const handleImages = () => {
        if (vis3 == false ){
            set3(true);
        }
        else if (vis4 == false){
            set4(true);
            setButton(false);
        }
        
         
    
    }

    const [banner, setBanner] = useState(true);
    const [disabled, setDisabled] = useState(false)

  return (
    <div className={` py-[2vh] w-full `}>
        <div className={`w-full flex flex-col justify-center items-center `}>
            <h2 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Treatment Effects</h2>
            <div className={`${banner ? 'hidden' : ''} flex flex-row justify-between w-[50%] mx-auto`}>
                <h2 className={`text-[3.5vh] text-white font-main`}>Before</h2>
                <h2 className={`text-[3.5vh] text-white font-main`}>After</h2>
            </div>
            <div className={`${banner ? '' : 'hidden'} flex flex-col w-[90%] h-[60vh] md:h[80vh] bg-gold2 items-center justify-center text-white`}>
                <div className={`${disabled ? 'hidden' : ''}`}>
                    <p className=' text-[2.5vh] my-[1vh] text-center'>Sensitive Content</p>
                    <p className=' text-[2.5vh] my-[1vh] text-center'>These photos contain nudity. You must be at least 18 years old to continue.</p>
                    <p className=' text-[2.5vh] my-[1vh] text-center'>Are you over 18 years of age?</p>
                    <div className='flex flex-row items-center justify-center mt-[5vh]'>
                        <button onClick={() => {setDisabled(true)}} className='py-[1vh] px-[2vh] border-black border-2 mr-[1vw]'>NO</button>
                        <button onClick={() => setBanner(false)} className='text-gold2 bg-black py-[1vh] px-[2vh] border-black border-2 ml-[1vw]'>YES</button>
                    </div>
                </div>
                <div className={`${disabled ? '' : 'hidden'} flex flex-col items-center justify-center text-white`}>
                    <p className=' text-[2.5vh] my-[1vh] text-center'>Due to your age</p>
                    <p className=' text-[2.5vh] my-[1vh] text-center'>Unfortunately we can't show you the sensitive content.</p>
                </div>
            </div>
            <div className={`${banner ? 'hidden' : ''} w-full`}>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[15vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot1before}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[15vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot1after}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[35%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot1before}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[35%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot1after}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[15vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot_before2}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[15vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot_after2}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[35%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot_before2}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[35%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot_after2}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[15vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot_before3}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[15vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot_after3}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[35%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot_before3}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[35%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot_after3}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? '' : 'hidden'} flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[15vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot_before4}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[15vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot_after4}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[35%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot_before4}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[35%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={pshot_after4}></Image>
                    </div>
                </div>
            </div>
            </div>

            
            <button onClick={() => handleImages()} className={`${banner ? 'hidden' : ''} flex mx-auto px-[1vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 text-[2.5vh]  ${buttonVis ? "":"hidden"} mt-[1vh] font-main`}>Load More</button>
        </div>
    </div>
    
  )
}

export default PshotCompare