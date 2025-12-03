import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import { useState } from "react";
import GithubModal from "../components/GithubModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    
    <>
   
      <Hero openGithubModal={() => setShowModal(true)} />

      <div className="w-100 py-5 bg-light">
        <div className="row g-4">
          <AboutMe />
          <Skills />
        </div>
      </div>

      <GithubModal show={showModal} close={() => setShowModal(false)} />
    
    </>
  );
}
