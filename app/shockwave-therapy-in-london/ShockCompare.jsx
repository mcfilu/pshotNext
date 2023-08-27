'use client'
import React, {useState} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import shock_after1 from '../../public/shock_after1.png';
import shock_before1 from '../../public/shock_before1.png';
import Image from 'next/image';
// import { shock_after1, shock_before1 } from '../assets';

const ShockCompare = () => {
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
        }
        else if (vis5 == false){
            set5(true);
        }
        else if (vis6 == false){
            set6(true);
        }
        else if (vis7 == false){
            set7(true);
        }
        else if (vis8 == false){
            set8(true);
        }
        else if (vis9 == false){
            set9(true);
        }
        else if (vis10 == false){
            set10(true);
            setButton(false);
        }
         
    
    }
  return (
    <div className={` py-[2vh] w-full `}>
        <div className={`w-full flex flex-col justify-center items-center `}>
            <h2 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Treatment Effects</h2>
            <div className={`flex flex-row justify-between w-[50%] mx-auto`}>
                <h2 className={`text-[3.5vh] text-white font-main`}>Before</h2>
                <h2 className={`text-[3.5vh] text-white font-main`}>After</h2>
            </div>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={shock_before1.src} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={shock_after1.src} srcSet={shock_after1.src} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={shock_before1}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={shock_after1}></Image>
                    </div>
                </div>
            </div>

            
            {/* <button onClick={() => handleImages()} className={`flex mx-auto px-[1vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 text-[2.5vh]  ${buttonVis ? "":"hidden"} mt-[1vh] font-main`}>Load More</button> */}
        </div>
    </div>
    
  )
}

export default ShockCompare