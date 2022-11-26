
export default function Create() {
    return (
        <fieldset>
            <input type="date" name="choose-date" required/>
            <label htmlFor="choose-date">選擇日期</label>
            <button>預約</button>
        </fieldset>
    )
}
