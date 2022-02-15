import { useContext } from "react"
import Input from "../../../utils/input"
import TextArea from "../../../utils/text_area"
import { MyContext } from "../../main"



export default function PersonalInformationMenu(){

    const { handleInputChange,
            setLastName,
            setTitle,
            setAdress,
            setPhoneNumber,
            setEmail,
            setSumary,
            setFirstName } = useContext(MyContext)

    return(
        <div className="menu-info-cont">
            <Input handleChangeFunction={() => handleInputChange("#first-name-input",setFirstName)} name="first-name-input" maxlength="11" placeholder="First name" />
            <Input handleChangeFunction={() => handleInputChange("#last-name-input",setLastName)} name="last-name-input" maxlength="11" placeholder="Last name" />
            <Input handleChangeFunction={() => handleInputChange("#title-input",setTitle)} name="title-input" maxlength="37" placeholder="Title" />
            <Input handleChangeFunction={() => handleInputChange("#adress-input",setAdress)} name="adress-input" maxlength="23" placeholder="Adress" />
            <Input handleChangeFunction={() => handleInputChange("#phone-input",setPhoneNumber)} name="phone-input" maxlength="23" placeholder="Phone number" />
            <Input handleChangeFunction={() => handleInputChange("#email-input",setEmail)} name="email-input" maxlength="23" placeholder="Email" />
            <TextArea handleChangeFunction={() => handleInputChange("#sumary-input",setSumary)} name="sumary-input" placeholder="Sumary"/>
        </div>
    )
}