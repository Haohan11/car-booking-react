import { useRef } from "react"

export default function Create() {

    const buttonRef = useRef()

    function setButton(event) {
        buttonRef.current.disabled = !event.target.validity.valid
    }

    return (
        <fieldset>
            <input onChange={setButton} type="date" required/>
            <label>選擇日期</label>
            <button ref={buttonRef} disabled>預約</button>
        </fieldset>
    )
}
