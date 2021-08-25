
import './App.css';
import Navbar from './components/Navegation';
import Home from './components/Home/Home.js'
import Footer from './components/Footer/Footer.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedCity : ""
    }
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
