
import { useContext } from "react"

import { LoanFormContext } from "./Context/LoanFormContext"


export default function Component(){

    const InputContext = useContext(LoanFormContext);

    return(
        <>
            <label>{InputContext.title}:</label>
            <input type="text" value={InputContext.name} onChange={(e)=>{
                InputContext.Addname(e)
            }}></input>
        </>
    )
}