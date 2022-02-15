import Skill from "./skill" 

export default function SkillsOv(props) {
    return(

        <div className="skills-cont"> 

            {props.skills.map( (skill) => {

                return <Skill key={skill.id} id={skill.id} text={skill.text} />
                
            })}
            
        </div>
    )
}
