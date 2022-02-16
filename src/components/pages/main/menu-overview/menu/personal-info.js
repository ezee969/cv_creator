import { useContext } from "react"
import Input from "../../../utils/input"
import TextArea from "../../../utils/text_area"
import { MyContext } from "../../main"



export default function PersonalInformationMenu(){

    const { handlePersonalInfoChange } = useContext(MyContext)

    return(
        
        <div className="menu-info-cont" id="oOo">

            <Input  handleChangeFunction={(e) => handlePersonalInfoChange(e,"firstName")} 
                    maxlength="11" 
                    placeholder="First name"
                    className="information-input" 
                    />
            <Input  handleChangeFunction={(e) => handlePersonalInfoChange(e,"lastName")} 
                    maxlength="11"
                    placeholder="Last name" 
                    className="information-input" 
                    />
            <Input  handleChangeFunction={(e) => handlePersonalInfoChange(e,"title")} 
                    maxlength="37"
                    className="information-input" 
                    placeholder="Title" 
                    />
            <Input  handleChangeFunction={(e) => handlePersonalInfoChange(e,"adress")}
                    className="information-input" 
                    maxlength="23"
                    placeholder="Adress" 
                    />
            <Input  handleChangeFunction={(e) => handlePersonalInfoChange(e,"phoneNumber")} 
                    className="information-input" 
                    maxlength="23"
                    placeholder="Phone number" 
                    />
            <Input  handleChangeFunction={(e) => handlePersonalInfoChange(e,"email")} 
                    className="information-input" 
                    maxlength="23"
                    placeholder="Email" 
                    />
            <TextArea   handleChangeFunction={(e) => handlePersonalInfoChange(e,"sumary")}
                        className="information-input" 
                        name="sumary-input"
                        placeholder="Sumary"
                        />
        </div>
    )
}