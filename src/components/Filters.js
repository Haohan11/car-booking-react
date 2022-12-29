export default function Filters() {
    return (
        <div className="filters">
            <div className="filter">
                <input type="checkbox"/>
                <label>根據使用者篩選</label>
            </div>
            <div className="filter">
                <input type="date" required/>
                <label>只顯示此日期後</label>
            </div>
            <div className="filter">
                <input type="date" required/>
                <label>只顯示此日期前</label>
            </div>
        </div>
    )
}