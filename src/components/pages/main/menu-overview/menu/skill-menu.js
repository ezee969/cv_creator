import Input from "../../../utils/input"
import Button from "../../../utils/button"
import { useContext } from "react"
import { MyContext } from "../../main"

export default function SkillMenu() {

    const { skills,
            handleSkillInputChange,
            handleDeleteSkillButton } = useContext(MyContext)

    return(
        <div className="skills-cont">

            {skills.map( (skill) => {
                
                return <div id={skill.id} key={skill.id} className="skill-info-cont">
                            <Input  handleChangeFunction={handleSkillInputChange} 
                                    name="skill-input"
                                    maxlength="20" 
                                    placeholder="Skill"
                            />
                            <Button onClick={handleDeleteSkillButton} name="delete-add-btn" text="Delete" />
                        </div>
            })}

        </div>
    )
}