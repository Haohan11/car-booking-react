export default function Calendar() {

    const tableData = <td>
                        <input name="date" className="date" type="radio"/>
                        <label>5</label>
                      </td>
    const tableRow = <tr>{Array(7).fill(tableData)}</tr>
    
    return (
        <table>
            {Array(5).fill(tableRow)}
        </table>
    )
}