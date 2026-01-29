import {skills} from "../data/skills";

function Skills() {
    return (
        <section id="skills" className="section fade-up">
            <h2 >Skills</h2>
            <div className="skills-grid">
                {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
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