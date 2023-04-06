import { useState } from "react";
import FurnitureList from "./FurnitureList";

export default function Search () {
    const [input, setInput] = useState("")

    const changeInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <form>
                <input type="text" onChange={changeInput} value={input} />
            </form>
            <FurnitureList filter={input}/>
        </>
    )
}