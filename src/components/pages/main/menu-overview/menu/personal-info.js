import Input from "../../../utils/input"
import TextArea from "../../../utils/text_area"



export default function PersonalInformationMenu(props){
    return(
        <div className="menu-info-cont">
            <Input handleChangeFunction={props.handleFirstNameChange} name="first-name-input" maxlength="11" placeholder="First name" />
            <Input handleChangeFunction={props.handleLastNameChange} name="last-name-input" maxlength="11" placeholder="Last name" />
            <Input handleChangeFunction={props.handleTitleChange} name="title-input" maxlength="37" placeholder="Title" />
            <Input handleChangeFunction={props.handleAdressChange} name="adress-input" maxlength="23" placeholder="Adress" />
            <Input handleChangeFunction={props.handlePhoneNumberChange} name="phone-input" maxlength="23" placeholder="Phone number" />
            <Input handleChangeFunction={props.handleEmailChange} name="email-input" maxlength="23" placeholder="Email" />
            <TextArea handleChangeFunction={props.handleSumaryChange} name="sumary-input" placeholder="Sumary"/>
        </div>
    )
}