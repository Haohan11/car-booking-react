import { useState } from "react"
import useOneClick from "../hooks/useOneClick"

export default function Search() {

    const [filter, setFilter] = useState("")
    const [selectRef, selectClicked] = useOneClick()

    return (
        <fieldset className="search-section">
            <select ref={selectRef} required onChange={e => {
                setFilter(e.target.value)
            }}>
                {selectClicked ? null : <option value="" selected disabled></option>}
                <option value="filterByUsername">依使用者</option>
                <option value="filterByDateStart">此日期以後</option>
                <option value="filterByDateEnd">此日期以前</option>
            </select>
            <label htmlFor="choose-date">選擇篩選方式</label>
            {filter.includes("Date") ? <>
                <input type="date" name="choose-date" required/>
                <label htmlFor="choose-date">選擇日期</label>
            </> : null}
            <button>查詢</button>
        </fieldset>
    )
}
