'use client'

import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
// import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

const PshotFaqs = () => {

    const [openSecond, setSecond] = useState(true);
    const [openThird, setThird] = useState(false);
    const [openFourth, setFourth] = useState(false);
    const [openFifth, setFifth] = useState(false);
    const [openSixth, setSixth] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className={` w-full`}>
            <div className={` p-[2vh]   `}>
                <h1 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Frequently Asked Questions</h1>

                
                <hr className={`border-gold1 mt-[2vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSecond(!openSecond)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSecond ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSecond ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Am i suitable for this treatment?</h1>
                    </div>
                    <div className={`flex flex-col ${openSecond ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        A thorough consultation with our doctor will be required to determine if you are suitable for penis augmentation with soft tissue fillers, or if you would benefit from other O Concept™ treatments available in the clinic. The O Concept™ was devised as a bespoke, tailor-made sexual well-being solution by Dr Sherif Wakil, a pioneer of excellence in sexual aesthetics. During your consultation, our doctor will be able to recommend the safest and most effective treatment options to rebuild your sexual health.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        There are few medical reasons why some men would not be suitable for this minimally invasive treatment, but a detailed medical history will be taken.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setThird(!openThird)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openThird ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openThird ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Does it hurt?</h1>
                    </div>
                    <div className={`flex flex-col ${openThird ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        The soft tissue filler products that we use contain added local anaesthetic, in the form of lidocaine, meaning that injecting the hyaluronic acid into the shaft of the penis can be performed with minimal discomfort.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        The procedure can also be performed using a topical anaesthetic cream, which is applied before treatment, to aid comfort on insertion of the cannula, and where the filler product used is one without added lidocaine. Many patients find treatment to be completely pain free.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFourth(!openFourth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFourth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFourth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>How long does it take?</h1>
                    </div>
                    <div className={`flex ${openFourth ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        The procedure will take approximately 30 – 45 minutes, depending on the amount of augmentation required.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFifth(!openFifth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFifth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFifth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Is there any downtime/recovery time?</h1>
                    </div>
                    <div className={`flex flex-col ${openFifth ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        You can return to your normal activities immediately with little downtime or recovery time required. Expect some minor tenderness, bruising or bleeding at the injection point, plus redness and swelling of the penis, which should resolve within 24 – 48 hours.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        You should abstain from sexual intercourse for 2-3 weeks, to avoid the risk of infection. Avoiding strenuous exercise or heavy lifting is also advised.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSixth(!openSixth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSixth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSixth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>What kind of results can I expect?</h1>
                    </div>
                    <div className={`flex ${openSixth ? '' : 'hidden'} flex-col md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main `}>
                        With the use of hyaluronic acid injection, you can expect an increase in the girth or circumference of your penis of approximately 10 – 15%. With the use of more filler product we can achieved 30 – 40% increase. Careful augmentation means that the result will be natural-looking, cylindrical and aesthetically pleasing. Longer penises may require more filler product that shorter ones to achieve the desired increase in circumference.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        The addition of the hyaluronic acid can also result in a slight increase in the flaccid length of the penis.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Because we use a thick HA gel, it has the effect of creating a scaffold-like structure within the penis which adds the overall volume; this means that you will notice that there is less retraction or shrinkage to the penis between erect and flaccid states.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Results will last 15 to 18 months, with the filler being slowly metabolised by the body, reducing by approximately half after a year. Treatment will therefore need to be repeated to maintain the result and overall size increase, but the amount of filler required in repeat treatments is usually reduced.
                        </p>
                        
                        {/* <p className={`text-white text-[2.1vh] font-main`}>Like other Vampire Procedures, the Vampire Breast Lift™ injections will last about 12-24 months, depending on individual patients.</p> */}
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default PshotFaqs