import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";



import React from "react";

  



function App() {
 
  return (
    <>
      <Header />
      <main className="w-100 pt-0 px-3 px-md-5">
        <Outlet />
               
      </main>
      <Footer />
    </>
  );
}

export default App;
