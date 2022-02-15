import Input from "../../../utils/input"
import Button from "../../../utils/button"
import { useContext } from "react"
import { MyContext } from "../../main"

export default function ExperienceInformationMenu(props) {

    const { experiences,
            handleGroupInputChange,
            handleDeleteButton,
            setExperiences } = useContext(MyContext)

    return (
        <div className="experiences-cont">
    
            {experiences.map( experience => {
        
                return <div key={experience.id} id={experience.id} className="menu-info-cont">
                            <Input handleChangeFunction={e => handleGroupInputChange(e,experiences,setExperiences,"position")} name="position-input" maxlength="10" placeholder="Position" />
                            <Input handleChangeFunction={e => handleGroupInputChange(e,experiences,setExperiences,"company")} name="company-input" maxlength="10" placeholder="Company" />
                            <Input handleChangeFunction={e => handleGroupInputChange(e,experiences,setExperiences,"city")} name="city-input" maxlength="10" placeholder="City" />
                            <Input handleChangeFunction={e => handleGroupInputChange(e,experiences,setExperiences,"from")} name="from-input" maxlength="10" placeholder="From" />
                            <Input handleChangeFunction={e => handleGroupInputChange(e,experiences,setExperiences,"to")} name="to-input" maxlength="10" placeholder="To" />
                            <Button onClick={e => handleDeleteButton(setExperiences,e)} text="Delete" />
                        </div>
             })}
             
         </div>
        
    )
}