import { useContext } from "react";
import { MyContext } from "../../main";
import EducationTxt from "./education-txt";

export default function EducationsOverview(){

    const {educations} = useContext(MyContext)

    return(
        <div className="educations-cont" >

            {educations.map( education => {
                
                return <EducationTxt    firstEducationYear={education.from} 
                                        secondEducationYear={education.to}
                                        universityName={education.name}  
                                        educationCity={education.city}
                                        degree={education.degree}
                                        key={education.id}
                        />
            })}

        </div>
    )

}
