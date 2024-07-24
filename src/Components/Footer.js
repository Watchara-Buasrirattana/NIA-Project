import React from "react";
import './Footer.css';
import logo from './img/logo.png';
import { FaLine, FaFacebook, FaTiktok, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons";

function Footer() {
    return (
        <div className="bg-footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="NIA Logo" width={200} />
                </div>
                <div className="footer-contact">
                    <h1>สำนักงานนวัตกรรมแห่งชาติ (องค์การมหาชน)</h1>
                    <p>ที่อยู่: 73/2 ถนนพระรามที่ 6 แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพฯ 10400</p>
                    <p>02-017 5555, Fax: 02-017 5566</p>
                    <p>Email: saraban@nia.or.th, info@nia.or.th</p>
                </div>
                <IconContext.Provider value={{ color: "white", className: "icons" }}>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/NIAThailand/"><FaFacebook /></a>
                        <a href="https://lin.ee/tvV3KNj"><FaLine /></a>
                        <a href="https://www.tiktok.com/@niathailand"><FaTiktok /></a>
                        <a href="https://x.com/NIAThailand"><FaXTwitter /></a>
                        <a href="https://www.instagram.com/niathailand/"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/company/national-innovation-agency-public-organization"><FaLinkedinIn /></a>
                        <a href="https://www.youtube.com/@NIAChannel-Thailand"><FaYoutube /></a>
                    </div>
                </IconContext.Provider>
            </div>
            <div className="footer-copyright">
                <p>© 2024 MHESIFAIR.COM ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
}

export default Footer;
