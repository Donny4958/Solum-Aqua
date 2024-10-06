
import './Home.css';
import Navbar from '../components/navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';


// En tu componente App:

function App() {
  return (          
    <div class="container">

      <div class="Left">
          <h1>Welcome !</h1> 
          <h2>Welcome to Solum Aqua, we are a tool that helps you take care of your crops considering your area and soil type. Happy Farming!</h2>
          <Link to="/Weather">
          <button>
          Insert your Location
          </button>
          </Link>
      </div> 

     <div class="Right">
        <h1>Quick Start</h1> 
        <h2>Follow few steps to generate your Croping Plan. Know when to water your crops and get alerts of upcoming weather to avoid crop damage.</h2>
        <Link to="/Recomendaciones">
        <button>
         Start
         </button>
         </Link>
      </div>
      
     </div>
          
  );
}

export default App;
