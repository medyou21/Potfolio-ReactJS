import "../styles/skills.css";

export default function Skills() {
  const skills = [
    { name: "React", level: 90, color: "bg-primary" },
    { name: "Node.js", level: 80, color: "bg-success" },
    { name: "JavaScript", level: 95, color: "bg-warning" },
    { name: "CSS / Bootstrap", level: 85, color: "bg-info" },
  ];

  return (
    <div className="col-12 col-md-6 mb-4 w-100">
      <section className="text-start">
        <h2 className="mb-4 skill-title">Compétences</h2>
       
        {skills.map((skill, index) => (
          <div key={index} className="mb-3">
            <h5>{skill.name}</h5>
            <div className="progress">
              <div
                className={`progress-bar ${skill.color}`}
                role="progressbar"
                style={{ width: `${skill.level}%` }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
