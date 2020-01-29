import React from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import './App.css';
import Home from './components/home';
// import uuid from 'uuid';

class App extends React.Component {
  
  
  render() {
    return (
      <div className="page-wrapper">
      {/* <div className="preloader"></div>  */}
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
