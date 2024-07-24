import React, { useState, useEffect, useRef } from 'react';
import './Schedule.css';
import astronaut from './img/schedule1.png';
import { isVisible } from '@testing-library/user-event/dist/utils';

const AccordionItem = ({ date, content, isOpen, onClick }) => {
    const [animation, setAnimation] = useState('');

    const handleAnimationEnd = () => {
        setAnimation('');
    };

    return (
        <div className="dropdown">
            <button className={`accordion-button ${isOpen ? 'active' : ''}`} onClick={onClick}>
                {date}
            </button>
            <div
                className={`accordion-content ${isOpen ? 'slide-down' : animation === 'slide-up' ? 'slide-up' : ''}`}
                onAnimationEnd={handleAnimationEnd}
            >
                {content && (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

function Schedule() {
    const [openIndex, setOpenIndex] = useState(null);
    const [lastOpenIndex, setLastOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
            setLastOpenIndex(index);
        } else {
            setOpenIndex(index);
            setLastOpenIndex(openIndex);
        }
    };

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

    const accordionData = [
        { date: '22 July', content: ['9:30 - 12:00 Room 205: MOU (7 หน่วยงาน)', '10:00 - 12:00 Room 206: การส่งเสริมความก้าวหน้าของวิสาหกิจเพื่อสังคมผ่านนวัตกรรม', '10:00 - 12:00 Room 202: การสัมมนาการขยายตลาดญี่ปุ่นในประเทศไทย [Jetro]', '14:00 - 16:00 Main Stage: อว. FAIR Opening ceremony [**เฉพาะผบ.อว.]', '16:00 - 17:30 Mini Stage: Japan Startup Pitching'] },
        { date: '23 July', content: ['10:00 - 12:00 Room 210: ตลาดเงินและตลาดทุนเพื่อการเติบโตธุรกิจนวัตกรรมรุ่นใหม่', '10:00 - 12:00 Room 201: YMID MEDZEEDZ 2024', '13:00 - 15:00 Main Stage: พิธีเปิดงาน SITE 2024 และมอบรางวัล PM Award', '15:10 - 15:20 Main Stage: MoU NIA x TISTR', '15:30 - 16:00 Main Stage: Unicorn Talk', '15:30 - 17:00 NIA Stage: MOU (4 หน่วยงาน)', '16:00 - 16:30 Main Stage: Scale-up Thailand by Fueling by Coach, Cash and Connect', '16:30 - 17:00 Main Stage: Startup and Innovation Ecosystem in Montgomery County, USA', '17:00 - 17:30 Main Stage: Global Startup Scaling for Thai Startups', '17:30 - 18:00 Main Stage: Road to Unicorn', '18:00 - 20:00 NIA Stage: SITE2024 Networking'] },
        { date: '24 July', content: ['9:00 - 16:00 Room 211: Climate Tech Workshop – UNESCAP', '9:00 - 16:00 Room 210: AI Hackathon (NIA x KMITL x Queensland)', '9:30 - 12:00 Room 202: Future-Ready Organization for Sustainable Innovation', '13:00 - 18:00 Mini Stage: Startup Thailand League National Pitching (14 teams)', '13:30 - 15:30 Room 203: การประชุมรับฟังความคิดเห็นต่อร่างข้อเสนอแนะเชิงนโยบาย จากผู้มีส่วนได้ส่วนเสียของร่างข้อเสนอเชิงนโยบาย เพื่อประกอบการเสนอมาตรการทางภาษี ที่ส่งเสริมการใช้ประโยชน์ผลงานวิจัย ทรัพย์สินทางปัญญาและนวัตกรรม'] },
        { date: '25 July', content: ['9:00 - 16:00 Room 210: AI Hackathon (NIA x KMITL x Queensland)', '13:00 - 13:30 Mini Stage: Korean startup ecosystem (Y&Archer)', '13:30 - 14:00 Mini Stage: KOREA SMEs growth policy and KOSME’s role', '14:30 - 15:00 Mini Stage: โอกาสของธุรกิจในการปรับใช้ ESG ในองค์กร และแนวคิดในการขับเคลื่อน Sustainable Economy ผ่าน digital platform', '15:30 - 16:00 Mini Stage: ธุรกิจเพื่อสังคม และบทบาทในการขับเคลื่อนนวัตกรรม'] },
        { date: '26 July', content: ['9:00 - 16:00 Room 210: AI Hackathon (NIA x KMITL x Queensland)', '10:00 - 12:00 Room 201: Growth Forum', '15:00 - 20:00 Room 201: SPACE-F Experience sharing & Networking', '15:30 - 17:00 Mini Stage: AI Hackathon Final Pitching'] },
        { date: '27 July', content: ['9:00 - 16:00 Room 210: AI Hackathon (NIA x KMITL x Queensland)'] },
        { date: '28 July', content: ['9:00 - 16:00 Room 210: STEAM4INNOVATOR'] },
    ];

    return (
        <div className="bg-schedule">
            <img src={astronaut} alt="" />
            <div className="schedule-topic">
                <h1 ref={headingRef} className={isVisible ? 'fade-up text-center font-bold text-lg' : 'text-center font-bold text-lg'}>ACTIVITIES SCHEDULE</h1>
                <h2 className={isVisible ? 'fade-up text-center' : 'text-center'}>INNOVATION FOR GROWTH AND SUSTAINABILITY</h2>
                <div className="space-y-2 pb-[8%]">
                    {accordionData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            date={item.date}
                            content={item.content}
                            isOpen={openIndex === index}
                            onClick={() => toggleAccordion(index)}
                            animation={lastOpenIndex === index ? 'slide-up' : ''}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Schedule;
