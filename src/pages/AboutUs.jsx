import React from 'react';
import './aboutus.css'; // Archivo CSS para los estilos en minúsculas

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About "Los Crackers"</h1>
            <p className="about-description">
             Students passionate about programming and problem-solving.
                            </p>
            
            <h2 className="about-subtitle">Our Mission</h2>
            <p className="about-text">
                Bridge the gap between modern technology and traditional farming methods, creating a harmonious balance that benefits both the environment and the economy.
            </p>

            <h2 className="about-subtitle">Meet the Team</h2>
            <div className="team-grid">
                <div className="team-member">
                    <h3>Luis Mendivil</h3>
                    <p>St.Computer Science Engineer</p>
                </div>
                <div className="team-member">
                    <h3>Paul Cruz</h3>
                    <p>St.Computer Science Engineer</p>
                </div>
                <div className="team-member">
                    <h3>Gael Pinto</h3>
                    <p>St.Mechatronic Engineer</p>
                </div>
                <div className="team-member">
                    <h3>Pablo Aboytes</h3>
                    <p>St.Computer Science Engineer</p>
                </div>
                <div className="team-member">
                    <h3>Jose Porchas</h3>
                    <p>St.Computer Science Engineer</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
