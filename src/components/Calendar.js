export default function Calendar() {

    const tableData = date =>
        <td>{ date === 0 ? null : 
            <>
                <input name="date" className="date" type="radio"/>
                <label>{date}</label>
            </>
        }</td>

    const table = (() => {
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth()
        const beginDay = new Date(year, month, 1).getDay()
        const endDay = new Date(year, month + 1, 0).getDay()
        const daysNum = new Date(year, month + 1, 0).getDate() + beginDay + (6 - endDay)
        const dates = Array.from( Array(daysNum), (date, index) => 
            (index < beginDay || index > daysNum - (7 - endDay)) ? 0 : index - beginDay + 1
        )
        
        const tableRows = Array.from( Array(daysNum / 7), (row, rowIndex) => 
            <tr>{ 
                Array.from( Array(7), (element, index) => 
                    tableData(dates[rowIndex * 7 + index])
                )
            }</tr>
        )
        
        return <table>{tableRows}</table>
    })()

    return (
        table
    )
}