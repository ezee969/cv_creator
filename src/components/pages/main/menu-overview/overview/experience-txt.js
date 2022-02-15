export default function ExperienceTxt(props) {
    return(
        <div className="experience-cont">
            <div className="year-cont">
                <p className="info-txt" id="work-year-txt">{props.firstWorkYear} - {props.secondWorkYear}</p>
            </div>
            <div className="work-info-cont">
                <ul className="experience-list" id="">
                    <li id="position-list">{props.position}</li>
                    <li>{props.company}, {props.location}</li>
                </ul>
            </div>
        </div>
    )
}