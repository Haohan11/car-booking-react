import React from 'react'
import { useState, useEffect, useRef } from "react"

export default function Search() {

    const selectRef = useRef()
    const [selectClicked, setSelectClicked] = useState(false)

    const [filter, setFilter] = useState("")

    useEffect(() => {
        selectRef.current?.addEventListener("change", () => {
            setSelectClicked(true)
        }, {once: true})
    }, [])



  return (
    <fieldset className="search-section">
        <select ref={selectRef} required onChange={e => {
            setFilter(e.target.value)
        }}>
            {selectClicked ? null : <option value="" selected disabled>選擇篩選方式</option>}
            <option value="filterByUsername">依使用者</option>
            <option value="filterByDateStart">此日期以後</option>
            <option value="filterByDateEnd">此日期以前</option>
        </select>
        <label htmlFor="choose-date">選擇篩選方式</label>
        {filter.includes("Date") ? <>
            <input type="date" name="choose-date" required/>
            <label htmlFor="choose-date">選擇日期</label>
        </> : null}
    </fieldset>
  )
}
