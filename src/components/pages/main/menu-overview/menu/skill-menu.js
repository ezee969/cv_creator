import Input from "../../../utils/input"
import Button from "../../../utils/button"
import { useContext } from "react"
import { MyContext } from "../../main"

export default function SkillMenu() {

    const { skills,
            handleGroupInputChange,
            handleDeleteButton,
            setSkills} = useContext(MyContext)

    return(
        <div className="skills-cont">

            {skills.map( (skill) => {
                
                return <div id={skill.id} key={skill.id} className="skill-info-cont">
                            <Input  handleChangeFunction={e => handleGroupInputChange(e,skills,setSkills,"text")} 
                                    name="skill-input"
                                    maxlength="20" 
                                    placeholder="Skill"
                                    />
                            <Button onClick={e => handleDeleteButton(setSkills,e)}
                                    name="delete-add-btn" 
                                    text="Delete" 
                                    />
                        </div>
            })}

        </div>
    )
}