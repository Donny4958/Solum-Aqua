import React, { useState } from 'react';
import './Recomendaciones.css'; // Importa tus estilos


// Objeto que contiene las descripciones de cada tipo de suelo
const plantDescriptions = {
  'CORN': 'Corn originated as a tropical grass and can tolerate exposures to adverse temperatures as high as 112 degrees F for brief periods. Optimal daytime temperatures for corn typically range between 77 degrees F and 91 degrees. Growth decreases when temperatures exceed 95 degrees F.',
  'WHEAT': 'Wheat grows best when the temperatures are warm, around from 21° to 24° C/ 70° to 75° F, but are not too hot. Wheat also needs a lot of sunshine, especially when the grains are beginning to fill out.',
  'RICE': 'The optimum temperature for rice cultivation is between 25°C and 35°C / 77° to 95° F, and in temperate regions, rice growth is impressed by a limited period that favours its growth . Exposure to cold temperature affects all phonological stages of rice and lower grain production and yield, too.',
  'SOY': 'Loam Soil loose and fertile. To the touch, it’s a balanced mix of textures, somewhat grainy (like sand) but also soft (like silt) and slightly sticky (like clay). Dark brown or black, indicating richness in organic matter.',
  'SUGAR CANE': 'Chalky soil can be sandy or clayey, but tends to be drier and rougher to the touch. It often contains fragments of limestone or stones. Generally white, light gray, or light yellow in color due to the calcium content.',
  'COTTON': 'Chalky soil can be sandy or clayey, but tends to be drier and rougher to the touch. It often contains fragments of limestone or stones. Generally white, light gray, or light yellow in color due to the calcium content.',
  'LEGUMES': 'Chalky soil can be sandy or clayey, but tends to be drier and rougher to the touch. It often contains fragments of limestone or stones. Generally white, light gray, or light yellow in color due to the calcium content.',
  'GREEN LEAFY VEGETABLES': 'Chalky soil can be sandy or clayey, but tends to be drier and rougher to the touch. It often contains fragments of limestone or stones. Generally white, light gray, or light yellow in color due to the calcium content.',
  'ROOT VEGETABLES': 'Chalky soil can be sandy or clayey, but tends to be drier and rougher to the touch. It often contains fragments of limestone or stones. Generally white, light gray, or light yellow in color due to the calcium content.',
  'TROPICAL FRUITS': 'Chalky soil can be sandy or clayey, but tends to be drier and rougher to the touch. It often contains fragments of limestone or stones. Generally white, light gray, or light yellow in color due to the calcium content.',
  'CITRUS FRUITS': 'Chalky soil can be sandy or clayey, but tends to be drier and rougher to the touch. It often contains fragments of limestone or stones. Generally white, light gray, or light yellow in color due to the calcium content.',
  'TEMPERATE FRUITS': 'Chalky soil can be sandy or clayey, but tends to be drier and rougher to the touch. It often contains fragments of limestone or stones. Generally white, light gray, or light yellow in color due to the calcium content.',
};

// Objeto que contiene las imágenes de cultivos recomendados

// Componente principal
export default function App() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del menú
  const [selectedPlant, setSelectedPlant] = useState(null); // Estado para almacenar el tipo de suelo seleccionado

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (plantType) => {
    setSelectedPlant(plantType); // Actualiza el tipo de suelo seleccionado
    setIsOpen(false); // Cierra el menú
  };

  return (
    <div className="App">
      <div className="Plantheader">
        <h1 id="Plant-header">
          Crop Recommendations
        </h1>
      </div>
      <div className="Plant-Page-Menu">
        <button className="dropbtn" onClick={toggleMenu}>
          CROPS
        </button>
        {isOpen && (
          <div className="dropdown-content">
            {Object.keys(plantDescriptions).map((type) => (
              <div key={type} onClick={() => handleMenuItemClick(type)}>
                {type}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Mostrar información según el tipo de suelo seleccionado */}
      {selectedPlant && (
        <div className="plant-info">
          <h3>About: {selectedPlant}</h3>
          <p>{plantDescriptions[selectedPlant]}</p>
          <h3>Recommended crops: </h3>
          
        </div>
      )}
      <br/><br/><br/><br/>
      
    </div>
  );
}
