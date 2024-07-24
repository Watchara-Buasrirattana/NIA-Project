import React, { useState, useEffect, useRef } from "react";
import './Banner.css';

function Banner() {

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
        <div ref={headingRef} className={isVisible ? 'fade-up bg-banner fade-up1' : 'bg-banner fade-up1'}>
            
        </div>
    );
}

export default Banner;