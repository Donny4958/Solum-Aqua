import React, { useState } from 'react';
import './Soil.css'; // Importa tus estilos
import CLAY from "../assets/CLAY.png";
import CLAYOP from "../assets/CLAY-OP.png";
import SANDY from "../assets/SANDY.png";
import SANDYOP from "../assets/SANDY-OP.png";
import SILT from "../assets/SILT.png";
import SILTOP from "../assets/SILT-OP.png";
import LOAM from "../assets/LOAM.png";
import LOAMOP from "../assets/LOAM-OP.png";
import CHALKY from "../assets/CHALKY.png";
import CHALKYOP from "../assets/CHALKY-OP.png";

// Objeto que contiene las descripciones de cada tipo de suelo
const soilDescriptions = {
  'CLAY SOIL': 'Clay Soil present a reddish color, both on the outside and inside. Easy to mold, they form shapes and are sticky. They are usually dark or reddish-brown in color.',
  'SANDY SOIL': 'Sandy Soil grainy and rough, like beach sand. It does not compact or form balls when pressed. It is usually light-colored, light brown, or even yellowish.',
  'SILT SOIL': 'Silt soil feels soft and silky when wet, like fine flour. Usually gray or dark brown.',
  'LOAM SOIL': 'Loam Soil loose and fertile. To the touch, it’s a balanced mix of textures, somewhat grainy (like sand) but also soft (like silt) and slightly sticky (like clay). Dark brown or black, indicating richness in organic matter.',
  'CHALKY SOIL': 'Chalky soil can be sandy or clayey, but tends to be drier and rougher to the touch. It often contains fragments of limestone or stones. Generally white, light gray, or light yellow in color due to the calcium content.'
};

// Objeto que contiene las imágenes de cultivos recomendados
const imgCrops = {
  'CLAY SOIL': CLAYOP,
  'SANDY SOIL': SANDYOP,
  'SILT SOIL': SILTOP,
  'LOAM SOIL': LOAMOP,
  'CHALKY SOIL': CHALKYOP
};

// Componente principal
export default function App() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del menú
  const [selectedSoil, setSelectedSoil] = useState(null); // Estado para almacenar el tipo de suelo seleccionado

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (soilType) => {
    setSelectedSoil(soilType); // Actualiza el tipo de suelo seleccionado
    setIsOpen(false); // Cierra el menú
  };

  return (
    <div className="App">
      <div className="Soilheader">
        <h1 id="Soil-header">
          Soil Type Recommendations
        </h1>
      </div>
      <div className="Soil-Page-Menu">
        <button className="dropbtn" onClick={toggleMenu}>
          SOIL TYPES
        </button>
        {isOpen && (
          <div className="dropdown-content">
            {Object.keys(soilDescriptions).map((type) => (
              <div key={type} onClick={() => handleMenuItemClick(type)}>
                {type}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Mostrar información según el tipo de suelo seleccionado */}
      {selectedSoil && (
        <div className="soil-info">
          <h3>About: {selectedSoil}</h3>
          <p>{soilDescriptions[selectedSoil]}</p>
          <h3>Recommended crops: </h3>
          <img 
            src={imgCrops[selectedSoil]} 
            alt={selectedSoil} 
            className="soil-image"
          />
        </div>
      )}
      <br/><br/><br/><br/>
      <div className="soilimg">
          <img src={CLAY} id='clay' alt="Clay Soil"/>
          <img src={SANDY} id='sandy' alt="Sandy Soil"/>
          <img src={SILT} id='silt' alt="Silt Soil"/>
          <img src={LOAM} id='loam' alt="Loam Soil"/>
          <img src={CHALKY} id='chalky' alt="Chalky Soil"/>
      </div>
    </div>
  );
}

