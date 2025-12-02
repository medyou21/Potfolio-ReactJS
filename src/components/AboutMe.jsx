export default function AboutMe() {
  return (
    <div className="col-md-6 mb-4">
      <section className="text-left">
        <h2 className="mb-4 section-title">À propos</h2>
        

        <div className="mb-3">
          <img
            src="/images/john-doe-about.jpg"
            alt="John Doe"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "400px" }}
          />
        </div>

        <p className="lead">
          Développeur web passionné depuis plusieurs années, j'aime créer
          des applications modernes, performantes et adaptées aux besoins
          des utilisateurs. J'ai travaillé sur de nombreux projets utilisant
          React, Node.js, PHP et bien plus encore.
        </p>
      </section>
    </div>
  );
}
