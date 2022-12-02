import { useState, useRef, useEffect } from "react"
import useOneClick from "../hooks/useOneClick"

export default function Search() {

    const [filter, setFilter] = useState("")
    const [selectRef, selectClicked] = useOneClick()

    const inputRef = useRef()
    const buttonRef = useRef()

    useEffect(() => {
        buttonRef.current.disabled = inputRef.current ? 
            !(selectRef.current.validity.valid && inputRef.current.validity.valid) :
            !selectRef.current.validity.valid
    }, [filter])

    return (
        <fieldset>
            <select name="filter" ref={selectRef} required 
                    onChange={e => setFilter(e.target.value)}>
                {selectClicked ? null : <option value="" selected disabled></option>}
                <option value="filterByUsername">依使用者</option>
                <option value="filterByDateStart">此日期以後</option>
                <option value="filterByDateEnd">此日期以前</option>
            </select>
            <label>篩選方式</label>
            {filter.includes("Date") ? <>
                <input name="date" ref={inputRef} type="date" required
                       onChange={e => buttonRef.current.disabled = !e.target.validity.valid}/>
                <label htmlFor="selectedDate">日期</label>
            </> : null}
            <button ref={buttonRef} disabled>查詢</button>
        </fieldset>
    )
}
