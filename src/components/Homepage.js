import Navbar from "./Navbar.js"
import Sidebar from "./Sidebar.js"
import Editnav from "./QTriThanhVien/Editnav.js"
const Homepage = ()=> {
    return(
        <div>
            <Sidebar/>
            <Navbar/>
            <Editnav/>
        </div>
    )
}
export default Homepage;