export default function Skill(props) {
    return(
        <li id={props.id} key={props.id}><span>{props.text}</span></li>
    )
}