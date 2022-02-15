import Input from "../../../utils/input"
import Button from "../../../utils/button"

export default function ExperienceInformationMenu(props) {
    return (
        <div className="experiences-cont">
    
            {props.experiences.map( experience => {
        
                return <div key={experience.id} id={experience.id} className="menu-info-cont">
                            <Input handleChangeFunction={props.onChangePosition} name="position-input" maxlength="10" placeholder="Position" />
                            <Input handleChangeFunction={props.onChangeCompany} name="company-input" maxlength="10" placeholder="Company" />
                            <Input handleChangeFunction={props.onChangeCity} name="city-input" maxlength="10" placeholder="City" />
                            <Input handleChangeFunction={props.onChangeFrom} name="from-input" maxlength="10" placeholder="From" />
                            <Input handleChangeFunction={props.onChangeTo} name="to-input" maxlength="10" placeholder="To" />
                            <Button setState = {props.setExperiences} onClick={props.handleDelBut} text="Delete" />
                        </div>
             })}
             
         </div>
        
    )
}