import { useState } from "react"
import { InputCount } from "../InputCount/InputCount"
import { Count } from "../Count/Count"



export const OpcionesButton = () => {

    const [inputType, setInputType ] = useState('button')

    const option=()=>{
        setInputType('input')
    }
    
    return (
        <div className="col-md-6">
            
            
            {
                inputType === 'button' ? 
                    <Count option={option} />
                : 
                    <InputCount />
            }
             
        </div>
    )
}