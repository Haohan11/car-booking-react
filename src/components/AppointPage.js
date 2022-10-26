
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
                <fieldset id={`${actions["SEARCH"]}-appoint`}>
                    <h1>預約車輛</h1>
                </fieldset>
                <fieldset id="search-appoint">
                    <h1>查詢預約</h1>
                </fieldset>
                <fieldset id="cancel-appoint">
                    <h1>取消預約</h1>
                </fieldset>
            </form>
        </div>
    )
}