import OverviewTitle from "./overview-title"
import SumaryTxt from "./sumary-txt"
import SkillsOv from "./skills-overview"
import ExperiencesOverview from "./experiences-overview"
import EducationsOverview from "./educations-overview"
import React from "react"

const Overview = React.forwardRef((props,ref) => {
    return(
        <div className="overview-cont" ref={ref}>
            <div id="overview-header">
                <p id="overview-name-text">{props.personalInfo.firstName} {props.personalInfo.lastName}</p>
                <p id="overview-title-text">{props.personalInfo.title}</p>
            </div>
            <div id="overview-main">
                <div id="overview-main-info">

                    <OverviewTitle text="Sumary" />
                    <SumaryTxt txt={props.personalInfo.sumary} />
                    
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
                    <p className="info-txt">{props.personalInfo.adress}</p>


                    <p className="important-info-txt">Phone Number</p>
                    <p className="info-txt">{props.personalInfo.phoneNumber}</p>

                    <p className="important-info-txt">Email</p>
                    <p className="info-txt">{props.personalInfo.email}</p>
                    
                </div>
            </div>
        </div>
    )
});

export default Overview;