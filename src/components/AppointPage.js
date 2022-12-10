import Header from "./Header"
import Calendar from "./Calender"

export default function AppointPage() {

    return (
        <div className="appoint-page">
            <Header />
            <div className="user-info">
                UserName
            </div>
            <form>
                <Calendar />
            </form>
        </div>
    )
}