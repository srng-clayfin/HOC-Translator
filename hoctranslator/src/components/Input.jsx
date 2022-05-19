import { useState } from "react"

export const Input = () =>
{
    
    const [inp,setInp] = useState("");
    console.log(inp)

    return(
        <div className="ip">
            <input type={"text"} onChange={(e) => setInp(e.target.value)} />
        </div>
    )
}