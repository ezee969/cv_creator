import { useContext } from "react"
import { MyContext } from "../../main"
import Skill from "./skill" 

export default function SkillsOv() {

    const {skills} = useContext(MyContext)

    return(

        <div className="skills-cont"> 

            {skills.map( (skill) => {

                return <Skill key={skill.id} id={skill.id} text={skill.text} />
                
            })}
            
        </div>
    )
}
