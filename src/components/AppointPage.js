import { useState } from "react"
import useOneEffect from "../hooks/useOneEffect"
import Header from "./Header"
import Create from "./Create"
import Search from "./Search"
import Cancel from "./Cancel"

export default function AppointPage() {

    const actionsGate = {
        "create": <Create />,
        "search": <Search />,
        "cancel": <Cancel />,
    }

    const [selectRef, selectClicked] = useOneEffect()

    const [currentAction, setCurrentAction] = useState("")

    return (
        <div className="appoint-page">
            <Header />
            <form>
                <div className="field actions-select-wrapper">
                    <select ref={selectRef} onChange={e => setCurrentAction(e.target.value)}>
                        {selectClicked ? null : <option value="" selected disabled>選擇動作</option>}
                        <option value="create">預約車輛</option>
                        <option value="search">查詢預約</option>
                        <option value="cancel">取消預約</option>
                    </select>
                </div>
                {/* {actionsGate["create"]} */}
                {currentAction === "" ? null : actionsGate[`${currentAction}`]}
            </form>
        </div>
    )
}