import OverviewTitle from "./overview-title"
import SumaryTxt from "./sumary-txt"
import ExperienceTxt from "./experience-txt"
import EducationTxt from "./education-txt"
import SkillsOv from "./skills-overview"

export default function Overview(props) {
    return(
        <div className="overview-cont">
            <div id="overview-header">
                <p id="overview-name-text">{props.firstName} {props.lastName}</p>
                <p id="overview-title-text">{props.title}</p>
            </div>
            <div id="overview-main">
                <div id="overview-main-info">

                    <OverviewTitle text="Sumary" />
                    <SumaryTxt txt={props.sumary} />
                    
                    <OverviewTitle text="Skills" />
                    <SkillsOv skills={props.skills}/>

                    <OverviewTitle text="Experience" />
                    <ExperienceTxt firstWorkYear="2018" secondWorkYear="2020" position="Freelance" location="New York" company="Self employed"/>
                    <ExperienceTxt firstWorkYear="2021" secondWorkYear="2022" position="Jew" location="Ibiza" company="Self employed"/>

                    <OverviewTitle text="Education" />
                    <EducationTxt firstEducationYear="2005" secondEducationYear="2011" universityName="UNRC" educationCity="Texas" degree="Computer science"/>
                    <EducationTxt firstEducationYear="2005" secondEducationYear="2011" universityName="UNRC" educationCity="Texas" degree="Computer sciencei"/>
                    <EducationTxt firstEducationYear="2005" secondEducationYear="2011" universityName="UNRC" educationCity="Texas" degree="Computer sciencei"/>

                </div>
                <div id="overview-column-info">

                    <OverviewTitle text="Personal Details" />

                    <p className="important-info-txt">Adress</p>
                    <p className="info-txt">{props.adress}</p>


                    <p className="important-info-txt">Phone Number</p>
                    <p className="info-txt">{props.phoneNumber}</p>

                    <p className="important-info-txt">Email</p>
                    <p className="info-txt">{props.email}</p>
                    
                </div>
            </div>
        </div>
    )
}