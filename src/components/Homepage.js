import Navbar from "./Navbar.js"
import Sidebar from "./Sidebar.js"
import Editnav from "./QTriThanhVien/Editnav.js"
import Table from "./QTriThanhVien/Table.js"
const Homepage = ()=> {
    return(
        <div>
            <Sidebar/>
            <Navbar/>
            <Editnav/>
            <Table/>
        </div>
    )
}
export default Homepage;