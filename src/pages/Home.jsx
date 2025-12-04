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

      {/* Section avec card */}
      <div className="container my-5">
        <div className="card shadow-sm p-4">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <AboutMe />
            </div>

            <div className="col-12 col-lg-6">
              <Skills />
            </div>
          </div>
        </div>
      </div>

      <GithubModal show={showModal} close={() => setShowModal(false)} />
    </>
  );
}