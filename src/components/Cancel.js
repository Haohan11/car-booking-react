
export default function Cancel() {
    return (
        <fieldset>
            <input type="date" name="choose-date" required/>
            <label htmlFor="choose-date">選擇日期</label>
            <button>取消預約</button>
        </fieldset>
    )
}
