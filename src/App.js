import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from "./pages/Test.jsx";
import { Link } from 'react-router-dom';
import Soil from './pages/Soil.jsx'
import Recomendaciones from './pages/Recomendaciones.jsx'
import Home from './pages/Home.jsx'
import Resources from './pages/Resources.jsx'
import Weather from './pages/Weather.jsx'
import Calculadora from './pages/Calculadora.jsx'
import AboutUs from './pages/AboutUs.jsx'



// En tu componente App:

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />         
      <Routes>           
      <Route path="*" element={<Home />} />
          <Route path="/Home" element={<Home />}/>  
          <Route path="/test" element={<Test />}/>
          <Route path="Soil" element={<Soil />} />
          <Route path="Recomendaciones" element={<Recomendaciones />} />
          <Route path="Resources" element={<Resources />} />
          <Route path="Weather" element={<Weather />} />
          <Route path="Calculadora" element={<Calculadora />} />
          <Route path="/AboutUs" element={<AboutUs />} />

      </Routes>
      </div>
      <Footer />  
      
        
           
    </Router>    
    
  );
}

export default App;
