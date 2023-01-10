import { useState, useEffect } from "react"

export default function Calendar() {
    
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()

    const setMonthFormat = month => month < 10 ? '0' + month : month

    const [currentDate, setCurrentDate] = useState(today)

    //store dates in tr elements which generate by generateWeeks function
    const [weeks, setWeeks] = useState(generateWeeks(today))

    const [monthText, setMonthText] = useState(`${year}-${setMonthFormat(month + 1)}`)
    
    function createDateElement(date) {
        return (
            <td>{ date === 0 ? null : 
                <>
                    <input name="date" className="date" 
                           type="radio" value={date} 
                           defaultChecked={currentDate.getDate() === date}
                           onChange={selectDate}
                    />
                    <label>{date}</label>
                </>
            }</td>
        )
    }

    function selectDate(event) {
        setCurrentDate( currentDate => {
            currentDate.setDate(event.target.value)
            return currentDate
        } )
    }

    function generateWeeks(date) {
        const year = date.getFullYear()
        const month = date.getMonth()
        
        const beginDay = new Date(year, month, 1).getDay()
        const endDay = new Date(year, month + 1, 0).getDay()
        const daysNum = new Date(year, month + 1, 0).getDate() + beginDay + (6 - endDay)
        const dates = Array.from( Array(daysNum), (date, index) => 
            (index < beginDay || index > daysNum - (7 - endDay)) ? 0 : index - beginDay + 1
        )
        
        return Array.from( Array(daysNum / 7), (week, weekIndex) => 
            <tr>{ 
                Array.from( Array(7), (date, index) => 
                    createDateElement(dates[weekIndex * 7 + index])
                )
            }</tr>
        )
    }

    function handleMonthSelect(event) {
        const date = new Date(event.target.valueAsDate)

        setMonthText(event.target.value)
        setWeeks(generateWeeks(date))
    }

    function getNextMonth() {
        const newDate = new Date(currentDate)
        newDate.setMonth(currentDate.getMonth() + 1)

        setCurrentDate(newDate)
        setWeeks(generateWeeks(newDate))
        setMonthText(`${newDate.getFullYear()}-${setMonthFormat(newDate.getMonth() + 1)}`)
    }
    
    function getLastMonth() {
        const newDate = new Date(currentDate)
        newDate.setMonth(currentDate.getMonth() - 1)

        setCurrentDate(newDate)
        setWeeks(generateWeeks(newDate))
        setMonthText(`${newDate.getFullYear()}-${setMonthFormat(newDate.getMonth() + 1)}`)
    }
    
    return (
        <table>
            <tr>
                <th colSpan="1">
                    <button type="button" onClick={getLastMonth}></button>
                </th>
                <th colSpan="5">
                    <input type="month" 
                           value={monthText}
                           onChange={handleMonthSelect}
                    />
                </th>
                <th colSpan="1">
                    <button type="button" onClick={getNextMonth}></button>
                </th>
            </tr>
            {weeks}
        </table>
    )
}