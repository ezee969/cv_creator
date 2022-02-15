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
    const handleDeleteButton = (stateSetter,event) => {
        const divId = event.target.parentElement.id
        stateSetter( currentState => currentState.filter( obj => obj.id !== divId))
    }

    const handleGroupInputChange = (event,array,stateSeter,key) => {
        const divId = event.target.parentElement.id
        const obj = array.find( experience => experience.id === divId )
        const objIndex = array.findIndex( experience => experience.id === divId)
        obj[key] = event.target.value
        stateSeter( currentObjs => currentObjs.filter( obj => obj.id !== divId))
        stateSeter( currentObjs => arrayInsert(currentObjs, objIndex, obj))
        console.log(array)
    }

    //Personal information handle functions.
    const handleInputChange = (divId,stateSeter) => {
        const getInput = document.querySelector(divId)
        stateSeter(getInput.value)
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
                                        
            <MyContext.Provider value={{handleInputChange,
                                        handleGroupInputChange,
                                        handleDeleteButton,
                                        setLastName,
                                        setTitle,
                                        setAdress,
                                        setPhoneNumber,
                                        setEmail,
                                        setSumary,
                                        setFirstName,
                                        skills,
                                        setSkills,
                                        experiences,
                                        setExperiences,
                                        educations,
                                        setEducations
                                    }}>
            <Menu   handleAddSkillButton = {handleAddSkillButton}
                    handleAddExperienceButton = {handleAddExperienceButton}
                    handleAddEducationButton = {handleAddEducationButton}
                    />
            </MyContext.Provider>

            <MyContext.Provider value={{skills,
                                        experiences,
                                        educations,
                                        sumary
                                        }}>                       
            <Overview   firstName = {firstName} 
                        lastName = {lastName}
                        title = {title}
                        adress = {adress}
                        phoneNumber = {phoneNumber}
                        email = {email}
                         />
            </MyContext.Provider>

        </div>
    )
}