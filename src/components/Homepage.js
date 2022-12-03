import Navbar from "./Navbar.js"
import Sidebar from "./Sidebar.js"
const Homepage = ()=> {
    return(
        <div className="flex flex-row">
            <Sidebar/>
            <div>
                <Navbar/>
                <div></div>
            </div>
        </div>
    )
}
export default Homepage;