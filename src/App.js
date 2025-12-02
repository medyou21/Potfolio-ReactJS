import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';


function App() {
  return (
    <>
      <Header />
      <main className="w-100 py-4 px-3 px-md-5">
        <Outlet />
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
