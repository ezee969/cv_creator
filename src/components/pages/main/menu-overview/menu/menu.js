import PersonalInformation from "./personal-info"
import ExperienceInformationMenu from "./experience"
import EducationInformationMenu from "./education"
import SkillMenu from "./skill-menu"
import Title from "../../../utils/title"
import Button from "../../../utils/button"

export default function Menu(props) {
    return(

        <div className="menu-cont">

            {/* Personal information section */}
            <Title text="Personal Information" />
            <PersonalInformation/>

            {/* Skills section */}
            <Title text="Skills" />
            <SkillMenu/>
            <Button onClick={props.handleAddSkillButton} name="delete-add-btn" text="Add" />

            {/* Experience section */}
            <Title text="Experience" />
            <ExperienceInformationMenu />
            <Button onClick={props.handleAddExperienceButton} name="delete-add-btn" text="Add" />

            {/* Education section */}
            <Title text="Education" />
            <EducationInformationMenu />
            <Button onClick={props.handleAddEducationButton} name="delete-add-btn" text="Add" />

            <Button name="generate-pdf-btn" text="Generate PDF" />

            <Button name="reset-btn" text="Reset" />
            
        </div>
    )
}