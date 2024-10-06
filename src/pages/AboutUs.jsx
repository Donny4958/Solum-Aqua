import React from 'react';
import './aboutus.css'; // Archivo CSS para los estilos en minúsculas

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                We are passionate about delivering sustainable agricultural solutions to help farmers increase productivity while conserving resources. Our mission is to empower communities through innovation and cutting-edge technologies.
            </p>
            
            <h2 className="about-subtitle">Our Mission</h2>
            <p className="about-text">
                Our mission is to bridge the gap between modern technology and traditional farming methods, creating a harmonious balance that benefits both the environment and the economy.
            </p>

            <h2 className="about-subtitle">Meet the Team</h2>
            <div className="team-grid">
                <div className="team-member">
                    <h3>John Doe</h3>
                    <p>CEO</p>
                </div>
                <div className="team-member">
                    <h3>Jane Smith</h3>
                    <p>Agronomist</p>
                </div>
                <div className="team-member">
                    <h3>Emily Johnson</h3>
                    <p>Soil Scientist</p>
                </div>
                <div className="team-member">
                    <h3>Michael Brown</h3>
                    <p>Data Analyst</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
