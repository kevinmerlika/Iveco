import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Section/Hero';
import Footer from './Footer/Footer';
import './Style/general.scss';
import Vehicles from './Section/Vehicles';
import Services from './Section/Services';
import VehicleFilter from './Section/VehicleFilter';

function App() {
  return (
    <><header>
      <Navbar />
    </header> 
    <main>
      <Hero/>
      <VehicleFilter/>
      <Vehicles/>
      <Services/>
    </main>
    <footer>
      <Footer/>
    </footer>
      
      
      </>
  );
}

export default App;
