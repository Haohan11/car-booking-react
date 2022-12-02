import { useRef } from "react"

export default function Create() {

    const buttonRef = useRef()

    function setButton(event) {
        buttonRef.current.disabled = !event.target.validity.valid
    }

    return (
        <fieldset>
            <input name="selectedDate" type="date" required 
                   onChange={setButton}/>
            <label htmlFor="selectedDate">日期</label>
            <button ref={buttonRef} disabled>預約</button>
        </fieldset>
    )
}
