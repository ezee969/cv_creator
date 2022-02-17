import Menu from "./menu-overview/menu/menu"
import React, { useState, useRef } from "react";
import Overview from "./menu-overview/overview/overview"
import uniqid from "uniqid";
import { useReactToPrint } from "react-to-print";
export const MyContext = React.createContext();

export default function Main() {


    //States.
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({ content: () => componentRef.current});
    const [personalInfo,setPersonalInfo] = useState([{   firstName:"",
                                                        lastName:"",
                                                        title:"",
                                                        adress:"",
                                                        phoneNumber:"",
                                                        email:"",
                                                        sumary:""   }])
    const [skills,setSkills] = useState([]);
    const [experiences,setExperiences] = useState([]);
    const [educations,setEducations] = useState([]);


    //----------Delete handle function.----------
    const handleDeleteButton = (stateSetter,event) => {
        const divId = event.target.parentElement.id
        stateSetter( currentState => currentState.filter( obj => obj.id !== divId))
    }

    //----------Input handle function.----------
    const handleGroupInputChange = (event,array,stateSeter,key) => {
        const divId = event.target.parentElement.id
        const obj = array.find( experience => experience.id === divId )
        const objIndex = array.findIndex( experience => experience.id === divId)
        obj[key] = event.target.value
        stateSeter( currentObjs => currentObjs.filter( obj => obj.id !== divId))
        stateSeter( currentObjs => arrayInsert(currentObjs, objIndex, obj))
    }

    //----------Reset handle function.----------
    const handleResetButton = () => {
        document.querySelectorAll(".information-input").forEach( inputElement => inputElement.value="")
        setPersonalInfo([])
        setSkills([])
        setExperiences([])
        setEducations([])
    }

    //Personal information input handle functions.
    const handlePersonalInfoChange = (e,prop) => {
        setPersonalInfo({...personalInfo, [prop] : e.target.value})
    }

    //Skills handle functions.
    const handleAddSkillButton = () => {
        setSkills(currentSkills => currentSkills.concat({text:"",id:uniqid()}))
    }
    
    //Experience handle functions.
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
        
        <div className="main-cont">
                                        
            <MyContext.Provider value={{handleGroupInputChange,
                                        handleDeleteButton,
                                        skills,
                                        setSkills,
                                        experiences,
                                        setExperiences,
                                        educations,
                                        setEducations,
                                        personalInfo,
                                        setPersonalInfo,
                                        handlePersonalInfoChange
                                    }}>
            <Menu   handleAddSkillButton = {handleAddSkillButton}
                    handleAddExperienceButton = {handleAddExperienceButton}
                    handleAddEducationButton = {handleAddEducationButton}
                    handleResetButton = {handleResetButton}
                    handlePrintButton = {handlePrint}
                    />
            </MyContext.Provider>
            
            <MyContext.Provider value={{skills,
                                        experiences,
                                        educations,
                                        }}>
            <div className="overview-wrapper-cont">
            <Overview ref={componentRef} personalInfo = {personalInfo} />
            </div>
            </MyContext.Provider>

        </div>
    )
}