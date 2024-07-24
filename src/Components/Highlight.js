import React, { useState, useEffect, useRef } from 'react';
import './Highlight.css';
import japan from './img/japan flag.png';
import korea from './img/korea flag.png';
import china from './img/china flag.png';

function Highlight() {

    const [isVisible, setIsVisible] = useState(false);
    const headingRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        return () => {
            if (headingRef.current) {
                observer.unobserve(headingRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-highlight">
            <div className="highlight w-[40%]">
                <div ref={headingRef} className={isVisible ? 'fade-down1 row1 flex gap-[3%] justify-evenly' : 'row1 flex gap-[3%] justify-evenly'}>
                    <h2 className="text-3xl font-bold text-[#FFD600]">FORUM</h2>
                    <h1 className="text-4xl">20 TOPICS</h1>
                    <h1 className="text-4xl">30 SPEAKERS</h1>
                </div>
                <div className={isVisible ? 'fade-down2 row1' : 'row1'}>
                    <div className="grid grid-cols-2">
                        <div className="grid justify-evenly text-start gap-[5%]">
                            <h2 className="text-3xl font-bold text-[#FFD600] flex justify-end">MARKETPLACE</h2>
                            <p className="text-sm text-[#FFD600]">STARTUP/SME/IBE</p>
                        </div>
                        <h1 className="text-4xl">300 BOOTHS</h1>
                    </div>
                </div>
                <div className={isVisible ? 'fade-down3 border-b-2 border-[#FFFFFF36] flex p-[5%] gap-[3%] justify-evenly' : 'border-b-2 border-[#FFFFFF36] flex p-[5%] gap-[3%] justify-evenly'}>
                    <h2 className="text-3xl font-bold text-[#FFD600]">BUSINESS MATCHING</h2>
                    <h1 className="text-4xl">20 SESSIONS</h1>
                </div>
                <div className={isVisible ? 'fade-down4 border-b-2 border-[#FFFFFF36] py-[5%]' : 'border-b-2 border-[#FFFFFF36] py-[5%]'}>
                    <h2 className="text-3xl font-bold text-[#FFD600]">PRIME MINISTER AWARD</h2>
                    <p className="text-sm">NATIONAL STARTUP 2024</p>
                </div>
                <div className={isVisible ? 'fade-down5 border-b-2 border-[#FFFFFF36] py-[5%]' : 'border-b-2 border-[#FFFFFF36] py-[5%]'}>
                    <h2 className="text-3xl font-bold text-[#FFD600]">INTERNATIONAL ZONE</h2>
                    <div className="nations flex justify-center gap-1 mb-1">
                        <img src={japan} alt="" />
                        <p className="text-sm">JAPAN</p>
                        <p className="text-sm">-</p>
                        <img src={korea} alt="" />
                        <p className="text-sm">KOREA</p>
                        <p className="text-sm">-</p>
                        <img src={china} alt="" />
                        <p className="text-sm">CHINA</p>
                    </div>
                </div>
                <div className={isVisible ? 'fade-down6 border-b-2 border-[#FFFFFF36] py-[5%]' : 'border-b-2 border-[#FFFFFF36] py-[5%]'}>
                    <h2 className="text-3xl font-bold text-[#FFD600]">OTHER</h2>
                    <div className="flex justify-center">
                        <div id='gap0' className="grid grid-cols-2 text-start gap-x-[40px]">
                            <p className="text-sm">GOVERNMENT SUPPORT</p>
                            <p className="text-sm">YMID: Yothi Medical Innovation District</p>
                            <p className="text-sm">GLOBAL STARTUP HUB</p>
                            <p className="text-sm">CLIMATE TECH CLUB</p>
                            <p className="text-sm">UNICORN FACTORY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Highlight;
