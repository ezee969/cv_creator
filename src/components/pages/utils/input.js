export default function Input(props) {

    return(
        <input  onChange={props.handleChangeFunction}
                type="text"
                id={props.name}
                name={props.name} 
                maxLength={props.maxlength}
                placeholder={props.placeholder} 
                className={props.className}
                >
                    
        </input>
    )
}