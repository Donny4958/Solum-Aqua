import React, { useState } from 'react';
import './Recomendaciones.css'; // Importa tus estilos
import CORNREC from "../assets/CORNREC.png";
import WHEATREC from "../assets/WHEATREC.png";
import RICEREC from "../assets/RICEREC.png";
import SUGARREC from "../assets/SUGARREC.png";
import COTTONREC from "../assets/COTTONREC.png";
import LEGUMES from "../assets/LEGUMES.png";
import GREENSREC from "../assets/GREENSREC.png";
import ROOTREC from "../assets/ROOTREC.png";
import TROPICALREC from "../assets/TROPICALREC.png";
import CITRUSREC from "../assets/CITRUSREC.png";
import TEMPREC from "../assets/TEMPREC.png";



// Objeto que contiene las descripciones de cada tipo de suelo
const plantDescriptions = {
  'CORN': CORNREC,
  'WHEAT':WHEATREC,
  'RICE': RICEREC,
  'SUGAR CANE': SUGARREC,
  'COTTON': COTTONREC,
  'LEGUMES': LEGUMES,
  'GREEN LEAFY VEGETABLES':GREENSREC,
  'ROOT VEGETABLES': ROOTREC,
  'TROPICAL FRUITS': TROPICALREC,
  'CITRUS FRUITS': CITRUSREC,
  'TEMPERATE FRUITS':TEMPREC ,
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
        <br/><br/>
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
        <div className="plant-img">
          <br/><br/>
          <h3>Measured by Hectares - Vegetables Measured by Square Meters</h3>
          <img 
            src={plantDescriptions[selectedPlant]} 
            alt={selectedPlant} 
            className="plant-image"
          />         
        </div>
      )}
      <br/><br/><br/><br/>
      
    </div>
  );
}
