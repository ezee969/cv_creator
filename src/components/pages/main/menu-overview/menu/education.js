import Input from "../../../utils/input"
import Button from "../../../utils/button"

export default function EducationInformationMenu(){
    return(
        <div className="menu-info-cont">
            <Input name="university-input" maxlength="10" placeholder="University name" />
            <Input name="city-input" maxlength="10" placeholder="City" />
            <Input name="degree-input" maxlength="10" placeholder="Degree" />
            <Input name="from-input" maxlength="10" placeholder="From" />
            <Input name="to-input" maxlength="10" placeholder="To" />
            <Button name="delete-add-btn" text="Delete" />
        </div>
    )
}