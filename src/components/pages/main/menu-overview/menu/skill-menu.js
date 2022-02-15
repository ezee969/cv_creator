import Input from "../../../utils/input"
import Button from "../../../utils/button"

export default function SkillMenu(props) {

    return(
        <div className="skills-cont">

            {props.skills.map( (skill) => {
                
                return <div id={skill.id} key={skill.id} className="skill-info-cont">
                            <Input  handleChangeFunction={props.onChange} 
                                    name="skill-input"
                                    maxlength="20" 
                                    placeholder="Skill"
                            />
                            <Button onClick={props.handleDelBut} name="delete-add-btn" text="Delete" />
                        </div>
            })}

        </div>
    )
}