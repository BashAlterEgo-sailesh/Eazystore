import Header from "./components/Header";
import Footer from "./components/footer/footer";
import React from "react";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Home/>
      < Footer/>
    </>  
  );    {/*react fragment to avoid unnecessary divs*/} 
}

export default App;