export default function Calendar() {

    const tableData = index => <td>
                        <input name="date" className="date" type="radio"/>
                        <label>{index}</label>
                      </td>
    const tableRow = <tr>{Array.from(Array(7), (element, index) => element = tableData(index))}</tr>

    return (
        <table>
            {Array(5).fill(tableRow)}
        </table>
    )
}