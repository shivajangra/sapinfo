import React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import "./App.css";
import Home from "./components/home/home";
// import uuid from 'uuid';

class App extends React.Component {
  componentDidMount() {
    // this.addScript("/assets/js/jquery.js");
    // this.addScript("/assets/js/popper.min.js");
    // this.addScript("/assets/js/bootstrap.min.js");
    // this.addScript("/assets/js/owl.js");
    // this.addScript("/assets/js/appear.js");
    // this.addScript("/assets/js/wow.js");
    // this.addScript("/assets/js/jquery-ui.js");
    // this.addScript("/assets/js/main.js");

    this.addScript("https://saptech.now.sh/js/jquery.js");
    this.addScript("https://saptech.now.sh/js/popper.min.js");
    this.addScript("https://saptech.now.sh/js/bootstrap.min.js");
    this.addScript("https://saptech.now.sh/js/jquery.mCustomScrollbar.concat.min.js");
    this.addScript("https://saptech.now.sh/js/jquery.fancybox.js");
    this.addScript("https://saptech.now.sh/js/appear.js");
    this.addScript("https://saptech.now.sh/js/owl.js");
    this.addScript("https://saptech.now.sh/js/wow.js");
    this.addScript("https://saptech.now.sh/js/jquery-ui.js");
    this.addScript("https://saptech.now.sh/js/main.js");

    
  }

  addScript = (src, async = false) => {
    const script = document.createElement("script");
    script.async = async;
    script.src = src;
    // script.onload = () => this.scriptLoaded();
    document.body.appendChild(script);
  };

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
