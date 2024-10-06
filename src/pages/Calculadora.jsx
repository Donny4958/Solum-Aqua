import React, { useState } from 'react';
import './Calculadora.css';

const HumedadCalculadora = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [humedad, setHumedad] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const humedadCalculada = ((a - b) / b) * 100;
    setHumedad(humedadCalculada.toFixed(2));
  };

  return (
    <div className="calculadora">
      <h3>Humidity Calculator (%)</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight of soil (wet) in grams:</label>
          <input type="number" value={a} onChange={(e) => setA(e.target.value)} required />
        </div>
        <div>
          <label>Weight of soil (dry) in grams:</label>
          <input type="number" value={b} onChange={(e) => setB(e.target.value)} required />
        </div>
        <button type="submit">Calculate Humidity</button>
      </form>
      {humedad !== null && <p>Humidity: {humedad}%</p>}
    </div>
  );
};

const ContenidoVolumetricoAguaCalculadora = () => {
  const [volumenAgua, setVolumenAgua] = useState('');
  const [volumenSuelo, setVolumenSuelo] = useState('');
  const [vwc, setVwc] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const vwcCalculado = (volumenAgua / volumenSuelo) * 100;
    setVwc(vwcCalculado.toFixed(2));
  };

  return (
    <div className="calculadora">
      <h3>Volumetric Water Content (%)</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Water Volume (m³):</label>
          <input type="number" value={volumenAgua} onChange={(e) => setVolumenAgua(e.target.value)} required />
        </div>
        <div>
          <label>Soil Volume (m³):</label>
          <input type="number" value={volumenSuelo} onChange={(e) => setVolumenSuelo(e.target.value)} required />
        </div>
        <button type="submit">Calculate VWC</button>
      </form>
      {vwc !== null && <p>Volumetric Water Content: {vwc}%</p>}
    </div>
  );
};

const EvapotranspiracionCultivoReferencia = () => {
  const [tmax, setTmax] = useState('');
  const [tmin, setTmin] = useState('');
  const [tmedia, setTmedia] = useState('');
  const [ra, setRa] = useState('');
  const [eto, setEto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const etoCalculado = 0.0023 * Math.sqrt(parseFloat(tmax) - parseFloat(tmin)) * (parseFloat(tmedia) + 17.8) * ra;
    setEto(etoCalculado.toFixed(2));
  };

  return (
    <div className="calculadora">
      <h3>Reference Crop Evapotranspiration (ETo)</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Maximum Temperature (°C):</label>
          <input type="number" value={tmax} onChange={(e) => setTmax(e.target.value)} required />
        </div>
        <div>
          <label>Minimum Temperature (°C):</label>
          <input type="number" value={tmin} onChange={(e) => setTmin(e.target.value)} required />
        </div>
        <div>
          <label>Average Temperature (°C):</label>
          <input type="number" value={tmedia} onChange={(e) => setTmedia(e.target.value)} required />
        </div>
        <div>
          <label>Solar Radiation:</label>
          <input type="number" value={ra} onChange={(e) => setRa(e.target.value)} required />
        </div>
        <button type="submit">Calculate ETo</button>
      </form>
      {eto !== null && <p>ETo: {eto} mm/day</p>}
    </div>
  );
};

const EvapotranspiracionActualCultivo = () => {
  const [kc, setKc] = useState('');
  const [eto, setEto] = useState('');
  const [eta, setEta] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const etaCalculada = kc * eto;
    setEta(etaCalculada.toFixed(2));
  };

  return (
    <div className="calculadora">
      <h3>Actual Crop Evapotranspiration (ETa)</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Crop Coefficient (Kc):</label>
          <input type="number" value={kc} onChange={(e) => setKc(e.target.value)} required />
        </div>
        <div>
          <label>Reference Crop Evapotranspiration (ETo):</label>
          <input type="number" value={eto} onChange={(e) => setEto(e.target.value)} required />
        </div>
        <button type="submit">Calculate ETa</button>
      </form>
      {eta !== null && <p>ETa: {eta} mm/day</p>}
    </div>
  );
};

const DemandaBrutaCalculadora = () => {
  const [dn, setDn] = useState('');
  const [er, setEr] = useState('');
  const [db, setDb] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dbCalculada = dn / er;
    setDb(dbCalculada.toFixed(2));
  };

  return (
    <div className="calculadora">
      <h3>Gross Demand (DB)</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Net Demand (DN):</label>
          <input type="number" value={dn} onChange={(e) => setDn(e.target.value)} required />
        </div>
        <div>
          <label>Water Efficiency (Er):</label>
          <input type="number" value={er} onChange={(e) => setEr(e.target.value)} required />
        </div>
        <button type="submit">Calculate DB</button>
      </form>
      {db !== null && <p>Gross Demand: {db} mm/day</p>}
    </div>
  );
};

const Calculadora = () => {
  return (
    <div className="calculadora-container">
      <HumedadCalculadora /><br/>
      <ContenidoVolumetricoAguaCalculadora /><br/>      
      <EvapotranspiracionCultivoReferencia /><br/>
      <EvapotranspiracionActualCultivo /><br/>
      <DemandaBrutaCalculadora />
      
    </div>
  );
};

export default Calculadora;
