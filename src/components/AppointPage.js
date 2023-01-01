import Header from "./Header"
import Calendar from "./Calendar"
import Filters from "./Filters"

export default function AppointPage() {

    return (
        <div className="appoint-page">
            <Header />
            <div className="user-info">
                UserName
            </div>
            <form>
                <Filters />
                <Calendar />
            </form>
        </div>
    )
}