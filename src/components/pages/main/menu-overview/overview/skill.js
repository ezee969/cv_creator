export default function Skill(props) {
    return(
        <li className="info-txt" id={props.id} key={props.id}><span>{props.text}</span></li>
    )
}