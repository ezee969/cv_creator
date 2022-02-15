import { useContext } from "react";
import { MyContext } from "../../main";
import ExperienceTxt from "./experience-txt";

export default function ExperiencesOverview() {

    const {experiences} = useContext(MyContext)

    return(
        
        <div className="experiences-cont">
            {experiences.map(experience => {

                return  <ExperienceTxt  firstWorkYear={experience.from}
                                        secondWorkYear={experience.to}
                                        position={experience.position}
                                        location={experience.city}
                                        company={experience.company}
                                        key={experience.id}/>
                    
                })
            }
        </div>
    )
}