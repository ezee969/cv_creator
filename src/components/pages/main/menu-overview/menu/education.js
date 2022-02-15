import Input from "../../../utils/input"
import Button from "../../../utils/button"
import { MyContext } from "../../main"
import { useContext } from "react"

export default function EducationInformationMenu(){

    const { educations,
            handleGroupInputChange,
            handleDeleteButton,
            setEducations } = useContext(MyContext)

    return(
        <div className="educations-cont">
            {educations.map( education => {

                return <div className="menu-info-cont" id={education.id} key={education.id}>
                            <Input handleChangeFunction={e => handleGroupInputChange(e,educations,setEducations,"name")} name="university-input" maxlength="10" placeholder="University name" />
                            <Input handleChangeFunction={e => handleGroupInputChange(e,educations,setEducations,"city")} name="city-input" maxlength="10" placeholder="City" />
                            <Input handleChangeFunction={e => handleGroupInputChange(e,educations,setEducations,"degree")} name="degree-input" maxlength="10" placeholder="Degree" />
                            <Input handleChangeFunction={e => handleGroupInputChange(e,educations,setEducations,"from")} name="from-input" maxlength="10" placeholder="From" />
                            <Input handleChangeFunction={e => handleGroupInputChange(e,educations,setEducations,"to")} name="to-input" maxlength="10" placeholder="To" />
                            <Button onClick={e => handleDeleteButton(setEducations,e)} name="delete-add-btn" text="Delete" />
                        </div>
            })}
        </div>
    )
}