import { useRef, useEffect } from "react"
import Header from "./Header"

export default function AppointPage() {

    const actions = {
        "CREATE": "create",
        "SEARCH": "search",
        "CANCEL": "cancel",
    }

    return (
        <div className="appoint-page">
            <Header />
            <form>
                <div className="field actions-select-wrapper">
                    <select name="actions-select">
                        <option id="choose-action">選擇動作</option>
                        <option>預約車輛</option>
                        <option>查詢預約</option>
                        <option>取消預約</option>
                    </select>
                    {/* <label htmlFor="action-select">選擇動作</label> */}
                </div>
                {/* <fieldset id={`${actions["SEARCH"]}-appoint`}>
                    <h1>預約車輛</h1>
                </fieldset>
                <fieldset id="search-appoint">
                    <h1>查詢預約</h1>
                </fieldset>
                <fieldset id="cancel-appoint">
                    <h1>取消預約</h1>
                </fieldset> */}
            </form>
        </div>
    )
}