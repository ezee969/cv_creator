export default function Button(props) {
    return(
        <button onClick={props.onClick} className={props.name} type="button">{props.text}</button>
    )
}