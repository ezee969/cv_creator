import Menu from "./menu-overview/menu/menu"
import React, { useState } from "react";
import Overview from "./menu-overview/overview/overview"
import uniqid from "uniqid";

export const MyContext = React.createContext();

export default function Main() {


    //States.
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [title,setTitle] = useState("");
    const [adress,setAdress] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [email,setEmail] = useState("");
    const [sumary,setSumary] = useState("");
    const [skills,setSkills] = useState([]);
    const [experiences,setExperiences] = useState([]);
    const [educations,setEducations] = useState([]);


    //----------Input change handle functions.----------
    //Personal information handle functions.
    const handleFirstNameInputChange = () => {
        const firstNameInput = document.querySelector("#first-name-input")
        setFirstName(firstNameInput.value)
    }

    const handleLastNameInputChange = () => {
        const lastNameInput = document.querySelector("#last-name-input")
        setLastName(lastNameInput.value)
    }

    const handleTitleInputChange = () => {
        const titleInput = document.querySelector("#title-input")
        setTitle(titleInput.value)
    }

    const handleAdressInputChange = () => {
        const adressInput = document.querySelector("#adress-input")
        setAdress(adressInput.value)
    }

    const handlePhoneNumberInputChange = () => {
        const phoneNumberInput = document.querySelector("#phone-input")
        setPhoneNumber(phoneNumberInput.value)
    }

    const handleEmailInputChange = () => {
        const emailInput = document.querySelector("#email-input")
        setEmail(emailInput.value)
    }

    const handleSumaryInputChange = () => {
        const sumaryInput = document.querySelector("#sumary-input")
        setSumary(sumaryInput.value)
    }

    //Skills handle functions.
    const handleSkillInputChange = (event) => {
        const skillId = event.target.parentElement.id
        const skillObj = skills.find( skill => skill.id === skillId )
        const skillObjIndex = skills.findIndex( skill => skill.id === skillId)
        skillObj.text = event.target.value
        setSkills( currentSkills => currentSkills.filter( skill => skill.id !== skillId))
        setSkills( currentSkills => arrayInsert(currentSkills, skillObjIndex, skillObj))
    }

    const handleDeleteSkillButton = (event) => {
        const skillId = event.target.parentElement.id
        setSkills( currentSkills => currentSkills.filter( skill => skill.id !== skillId))
    }

    const handleAddSkillButton = () => {
        setSkills(currentSkills => currentSkills.concat({text:"",id:uniqid()}))
    }
    
    //Experience handle functions.
    const handlePositionInputChange = (event) => {
        const experienceId = event.target.parentElement.id
        const experienceObj = experiences.find( experience => experience.id === experienceId )
        const experienceObjIndex = experiences.findIndex( experience => experience.id === experienceId)
        experienceObj.position = event.target.value
        setExperiences( currentExperiences => currentExperiences.filter( experience => experience.id !== experienceId))
        setExperiences( currentExperiences => arrayInsert(currentExperiences, experienceObjIndex, experienceObj))
    }

    const handleCompanyInputChange = (event) => {
        // const experienceId = event.target.parentElement.id
        // const experienceObj = experiences.find( experience => experience.id === experienceId )
        // const experienceObjIndex = experiences.findIndex( experience => experience.id === experienceId)
        // experienceObj.company = event.target.value
        // setExperiences( currentExperiences => currentExperiences.filter( experience => experience.id !== experienceId))
        // setExperiences( currentExperiences => arrayInsert(currentExperiences, experienceObjIndex, experienceObj))
    }

    const handleCityInputChange = (event) => {
        
    }

    const handleFromInputChange = (event) => {
        
    }

    const handleToInputChange = (event) => {
        
    }

    const handleDeleteExperienceButton = (event) => {
        const experienceId = event.target.parentElement.id
        setExperiences( currentExperiences => currentExperiences.filter( experience => experience.id !== experienceId))
    }

    const handleAddExperienceButton = () => {
        setExperiences(currentExperiences => currentExperiences.concat({position:"",
                                                                        company:"",
                                                                        city:"",
                                                                        from:"",
                                                                        to:"",
                                                                        id:uniqid()
                                                                        })
                    )
    }

    //Education handle functions.
    const handleUniversityInputChange = (event) => {

    }

    const handleStudyCityInputChange = (event) => {
        
    }

    const handleDegreeInputChange = (event) => {
        
    }

    const handleFromEducationInputChange = (event) => {
        
    }

    const handleToEducationInputChange = (event) => {
        
    }

    const handleDeleteEducationButton = (event) => {

    }

    const handleAddEducationButton = () => {
        setEducations(currentEducations => currentEducations.concat({name:"",
                                                                    city:"",
                                                                    degree:"",
                                                                    from:"",
                                                                    to:"",
                                                                    id:uniqid()}))
    }

    //-------utility functions-------
    const arrayInsert = (arr, index, ...newItem) => [
        ...arr.slice(0, index),
        ...newItem,
        ...arr.slice(index)
      ];


    return (
        <MyContext.Provider value={{handleFirstNameInputChange,
                                    handleLastNameInputChange,
                                    handleTitleInputChange,
                                    handleAdressInputChange,
                                    handlePhoneNumberInputChange,
                                    handleEmailInputChange,
                                    handleSumaryInputChange,
                                    skills,
                                    handleSkillInputChange,
                                    handleDeleteSkillButton
                                    }}>
        <div className="main-cont">
            
            <Menu   
                    handleAddSkillButton = {handleAddSkillButton}
                    experiencesArray = {experiences}
                    handleAddExperienceButton = {handleAddExperienceButton}
                    handlePositionChange = {handlePositionInputChange}
                    handleCompanyChange = {handleCompanyInputChange}
                    handleCityChange = {handleCityInputChange}
                    handleFromChange = {handleFromInputChange}
                    handleToChange = {handleToInputChange}
                    handleDeleteExperienceButton = {handleDeleteExperienceButton}
                    setExperiences = {setExperiences}
            />
            
            <Overview   firstName = {firstName} 
                        lastName = {lastName}
                        title = {title}
                        adress = {adress}
                        phoneNumber = {phoneNumber}
                        email = {email}
                        sumary = {sumary}
                        skills = {skills}
                         />

        </div>
        </MyContext.Provider>
    )
}