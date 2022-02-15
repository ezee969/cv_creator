import { useContext } from "react"
import { MyContext } from "../../main"

export default function SumaryTxt() {

    const {sumary} = useContext(MyContext)

    return(
        <p id="sumary-txt">{sumary}</p>
    )
}