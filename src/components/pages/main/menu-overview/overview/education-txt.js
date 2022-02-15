export default function EducationTxt(props) {
    return(
        <div className="education-cont">
            <div className="year-cont">
                <p className="info-txt">{props.firstEducationYear} - {props.secondEducationYear}</p>
            </div>
            <div className="education-info-cont">
                <ul className="experience-list" id="">
                    <li id="position-list">{props.universityName}, {props.educationCity}</li>
                    <li>Degree: {props.degree}</li>
                </ul>   
            </div>
        </div>
    )
}