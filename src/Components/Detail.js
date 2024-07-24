import React, { useState, useEffect, useRef } from "react";
import './Detail.css';
import telescope from './img/detail1.png';
import moon from './img/detail2.png';
import card1 from './img/detailcard1.png';
import card2 from './img/detailcard2.png';
import card3 from './img/detailcard3.png';
import card4 from './img/detailcard4.png';
import card5 from './img/detailcard5.png';

const cardImages = {
    forum: card1,
    marketplace: card2,
    businessMatching: card3,
    primeMinisterAward: card4,
    StartupThailandLeagueNationalPitching: card5
};

function Detail() {
    const [hoveredCard, setHoveredCard] = useState(null);
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

    const cardDetails = {
        forum: "เวทีที่รวมนักสตาร์ทอัพและนักวิจัยชั้นนำของเมืองไทย และวิทยากรผู้เชี่ยวชาญจากต่างประเทศ มาร่วมอัปเดต เทรนด์นวัตกรรมของโลก พร้อมแลกเปลี่ยนความรู้ และสร้างแรงบันดาลใจในการพัฒนานวัตกรรม",
        marketplace: "ตลาดสินค้านวัตกรรมที่ครบครันไปด้วยสตาร์ทอัพ ผู้ประกอบการนวัตกรรมกว่า 300 รายที่จะมาแนะนำสินค้าและบริการสุดเจ๋ง!",
        businessMatching: "โอกาสครั้งสำคัญสำหรับสตาร์ทอัพและผู้ประกอบการธุรกิจนวัตกรรมในการต่อยอดไอเดียสู่ธุรกิจนวัตกรรม หาคู่ค้า เจรจาจับคู่ทางธุรกิจ พร้อมรับคำปรึกษา เพื่อให้ธุรกิจเติบโต",
        primeMinisterAward: "พิธีมอบรางวัลประกาศเกียรติคุณและเชิดชูเกียรติให้แก่ผู้มีส่วนร่วมในการส่งเสริมและสนับสนุนการพัฒนาระบบนิเวศสตาร์ทอัพของประเทศและเสริมสร้างศักยภาพทางธุรกิจให้แก่สตาร์ทอัพไทยให้ก้าวสู่ตลาดต่างประเทศ",
        StartupThailandLeagueNationalPitching: "การประกวดแข่งขันแผนธุรกิจสตาร์ทอัพระดับมหาวิทยาลัย ชิงชนะเลิศระดับประเทศ (14 ทีมสุดท้าย)"
    };

    return (
        <div className="bg-detail">
            <img src={telescope} alt="Telescope" id="telescope"/>
            <img src={moon} alt="Moon" id="moon"/>
            <div className="detail-topic text-center pt-20">
                <h3 ref={headingRef} className={isVisible ? 'fade-up' : ''}>
                    งานมหกรรมนวัตกรรมและเครือข่ายสตาร์ทอัพไทย ที่ยิ่งใหญ่ที่สุดในประเทศ<br />
                    "STARTUP X INNOVATION THAILAND EXPO 2024" หรือ SITE 2024<br />
                    ภายใต้แนวคิด "Innovation for Growth and Sustainability"
                </h3>
                <div className={isVisible ? 'fade-up register my-10' : 'register my-10'}>
                    <a href="https://www.mhesifair.com/"><button type="button">ลงทะเบียน</button></a>
                </div>
                <div className='card p-5'>
                    {Object.keys(cardDetails).map((key, index) => (
                        <div 
                            key={index} 
                            className={`card-item ${key}`} 
                            onMouseEnter={() => setHoveredCard(key)} 
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <img src={cardImages[key]} alt={key} className="card-image" />
                            <div className="card-title">{key.replace(/([A-Z])/g, ' $1').toUpperCase()} {key === 'StartupThailandLeagueNationalPitching' ? ' 2024' : ''}</div>
                            {hoveredCard === key && <div className="details">{cardDetails[key]}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Detail;
