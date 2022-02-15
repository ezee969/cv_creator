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
            <PersonalInformation    handleFirstNameChange = {props.handleFirstNameChange}
                                    handleLastNameChange = {props.handleLastNameChange}
                                    handleTitleChange = {props.handleTitleChange}
                                    handleAdressChange = {props.handleAdressChange}
                                    handlePhoneNumberChange = {props.handlePhoneNumberChange}
                                    handleEmailChange = {props.handleEmailChange}
                                    handleSumaryChange = {props.handleSumaryChange}
            />

            {/* Skills section */}
            <Title text="Skills" />
            <SkillMenu  handleDelBut={props.handleDeleteSkillButton} 
                        skills={props.skillsArray}
                        onChange={props.handleSkillChange}
                        id={props.skillId} 
            />
            <Button onClick={props.handleAddSkillButton} name="delete-add-btn" text="Add" />

            {/* Experience section */}
            <Title text="Experience" />
            <ExperienceInformationMenu  experiences = {props.experiencesArray}
                                        onChangePosition = {props.handlePositionChange}
                                        onChangeCompany = {props.handleCompanyChange}
                                        onChangeCity = {props.handleCityChange} 
                                        onChangeFrom = {props.handleFromChange} 
                                        onChangeTo = {props.handleToChange} 
                                        handleDelBut = {props.handleDeleteExperienceButton}
                                        setExperiences = {props.setExperiences} 
            />
            <Button onClick={props.handleAddExperienceButton} name="delete-add-btn" text="Add" />

            {/* Education section */}
            <Title text="Education" />
            <EducationInformationMenu />
            <Button name="delete-add-btn" text="Add" />

            <Button name="generate-pdf-btn" text="Generate PDF" />

            <Button name="reset-btn" text="Reset" />
            
        </div>
    )
}