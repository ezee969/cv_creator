export default function TextArea(props) {
    return (
        <textarea   onChange={props.handleChangeFunction}
                    name={props.name} 
                    id={props.name}
                    maxLength="535" 
                    placeholder={props.placeholder} 
                    rows="5"
                    > 
                    
                    </textarea>
    )
}