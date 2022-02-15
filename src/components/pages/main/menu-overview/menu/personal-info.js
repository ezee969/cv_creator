import { useContext } from "react"
import Input from "../../../utils/input"
import TextArea from "../../../utils/text_area"
import { MyContext } from "../../main"



export default function PersonalInformationMenu(){

    const { handleFirstNameInputChange,
            handleLastNameInputChange,
            handleTitleInputChange,
            handleAdressInputChange,
            handlePhoneNumberInputChange,
            handleEmailInputChange,
            handleSumaryInputChange } = useContext(MyContext)

    return(
        <div className="menu-info-cont">
            <Input handleChangeFunction={handleFirstNameInputChange} name="first-name-input" maxlength="11" placeholder="First name" />
            <Input handleChangeFunction={handleLastNameInputChange} name="last-name-input" maxlength="11" placeholder="Last name" />
            <Input handleChangeFunction={handleTitleInputChange} name="title-input" maxlength="37" placeholder="Title" />
            <Input handleChangeFunction={handleAdressInputChange} name="adress-input" maxlength="23" placeholder="Adress" />
            <Input handleChangeFunction={handlePhoneNumberInputChange} name="phone-input" maxlength="23" placeholder="Phone number" />
            <Input handleChangeFunction={handleEmailInputChange} name="email-input" maxlength="23" placeholder="Email" />
            <TextArea handleChangeFunction={handleSumaryInputChange} name="sumary-input" placeholder="Sumary"/>
        </div>
    )
}