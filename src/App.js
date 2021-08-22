
import './App.css';
import Navbar from './components/Navegation';
import Home from './components/Home'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
