'use client'
import React, {useState} from 'react'
import Image from 'next/image';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { boobs1Before, boobs1After, boobs2Before, boobs2After, boobs3Before, boobs3After, boobs4Before, boobs4After, pshot1before, pshot1after} from '../assets';

const ChairCompare = () => {
    const [hov1, setHov1] = useState(false);
    const [hov2, setHov2] = useState(false);
    const [hov3, setHov3] = useState(false);
    const [hov4, setHov4] = useState(false);
    const [vis3, set3] = useState(false);
    const [vis4, set4] = useState(false);
    const handleImages = () => {
        if (vis3 == false & vis4 == false){
            set3(true);
        }
        else if (vis4 == false){
            set4(true);
        }
    }
  return (
    <div className={`bg-black bg-opacity-70 py-[2vh] w-3/4 rounded-[9px] ml-[4%] mr-[4%] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500 `}>
        <div className={`w-full flex flex-col justify-center items-center `}>
            <h1 className={`text-gold1 font-poppins text-center text-[4vh] mb-[1vh]`}>Treatment Effects</h1>
            <div className={`flex flex-row justify-between w-[39%] mx-auto`}>
                <h1 className={`text-[3vh] text-gold1`}>Before</h1>
                <h1 className={`text-[3vh] text-gold1`}>After</h1>
            </div>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-[50vw] h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={pshot1before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={pshot1after} srcSet={pshot1after} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`mr-[3vh] rounded-[9px]`} src={pshot1before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`ml-[3vh] rounded-[9px]`} src={pshot1after}></img>
                </div>
            </div>
            
            <button onClick={() => handleImages()} className={`flex mx-auto px-[2vh] py-[1vh] bg-gold1 text-white text-[2vh] rounded-full bg-opacity-60 mt-[1vh]`}>Load More</button>
        </div>
    </div>
    
  )
}

export default ChairCompare