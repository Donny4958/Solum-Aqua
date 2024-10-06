import './Home.css';
import Navbar from '../components/navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './About.css'; // Asegúrate de crear este archivo CSS

const About = () => {
    return (
        <div className="about">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                We are a dedicated team committed to providing the best agricultural solutions. Our mission is to empower farmers with knowledge and tools to maximize their yield while ensuring sustainable practices.
            </p>
            <h2 className="team-title">Meet Our Team</h2>
            <ul className="team-list">
                <li>John Doe - CEO</li>
                <li>Jane Smith - Agronomist</li>
                <li>Emily Johnson - Soil Scientist</li>
                <li>Michael Brown - Research Analyst</li>
            </ul>
        </div>
    );
};

export default AboutUs;
