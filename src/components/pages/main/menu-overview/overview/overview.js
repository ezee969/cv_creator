import OverviewTitle from "./overview-title"
import SumaryTxt from "./sumary-txt"
import SkillsOv from "./skills-overview"
import ExperiencesOverview from "./experiences-overview"
import EducationsOverview from "./educations-overview"

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
                    <SumaryTxt />
                    
                    <OverviewTitle text="Skills" />
                    <SkillsOv />

                    <OverviewTitle text="Experience" />
                    <ExperiencesOverview />

                    <OverviewTitle text="Education" />
                    <EducationsOverview />
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