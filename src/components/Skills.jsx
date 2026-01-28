import {skills} from "../data/skills";

function Skills() {
    return (
        <section id="skills" className="section">
            <h2 className="fade-in">Skills</h2>
            <div className="skills-grid">
                {skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="fade-in">
                        <h3>{skillGroup.category}</h3>
                        <ul>
                            {skillGroup.items.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>       
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;