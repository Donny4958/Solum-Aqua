import React from 'react';
import './Resources.css'; // Importa tus estilos

function App() {
    const paginas = [
        { nombre: 'Cropmonitor', url: 'https://cropmonitortools.org/', descripcion: 'Crop monitoring tool.' },
        { nombre: 'Nasaharvest', url: 'https://www.nasaharvest.org/about', descripcion: 'NASA Agricultural Monitoring Program.' },
        { nombre: 'Meteored', url: 'https://www.meteored.mx/avisos-meteorologicos/', descripcion: 'Its a map of humidity, temperature, wind, weather alerts, etc.' }
    ];
    
    return (
        <div id="app-container">
            <h1 id="titulo">Resources:</h1>
            <ul id="lista">
                {paginas.map((pagina, index) => (
                    <li key={index} className="items">
                        <a href={pagina.url} target="_blank" rel="noopener noreferrer" className="link">
                            {pagina.nombre}
                        </a>: {pagina.descripcion}
                    </li>
                ))}
            </ul>
            <br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default App;
