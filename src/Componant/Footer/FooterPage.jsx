import React from "react";
import './FooterPage.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function FooterPage() {
    const listItem = ["About us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliance Docs"];
    const quickLinks = ["Order & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"];

    return (
        <footer className="footer-container">
            <div className="footer-top-section">
                <div className="newsletter-section">
                    <h2>Be the first to know</h2>
                    <p style={{fontFamily:"Arial"}}>Sign up for updates from Metta Muse</p>
                    <div className="newsletter-input">
                        <input type="text" placeholder="Enter email" />
                        <button style={{fontFamily:"Arial"}} >SUBSCRIBE</button>
                    </div>
                </div>

                <div style={{display:"flex",flexDirection:"column"}}>
                <div className="footer-content">
                    <div className="contact-section">
                        <h4>Contact Us</h4>
                        <p style={{fontFamily:"Arial"}}>+44 2211 335360</p>
                        <p style={{fontFamily:"Arial"}}>customercare@mettamuse.com</p>
                    </div>
                     <div className="currency-section">
                        <h4>Currency</h4>
                        <p style={{fontFamily:"Arial"}}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
                </div>
            </div>

            <hr />

            <div className="footer-bottom-section">
                <div className="links-section">
                    <ul className="footer-list" >
                        <li className="list-title " style={{fontSize:"24px"}}>Metta Muse</li>
                        {listItem.map((item, index) => (
                            <li key={index} style={{fontFamily:"Arial",fontSize:"18px"}}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="quick-links-section">
                    <ul className="footer-list" >
                        <li className="list-title"style={{fontSize:"24px"}}>Quick Links</li>
                        {quickLinks.map((item, index) => (
                            <li key={index} style={{fontFamily:"Arial",fontSize:"18px"}}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="social-icons">
                    <h4>Follow Us</h4>
                    <div className="icons">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>

            <p className="footer-copyright">&copy; 2024 Metta Muse. All Rights Reserved.</p>
        </footer>
    );
}

export default FooterPage;
