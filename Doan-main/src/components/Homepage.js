import Navbar from "./Navbar.js"
import Sidebar from "./Sidebar.js"
import Table from "./QTriThanhVien/Table.js"
const Homepage = ()=> {
    return(
        <div>
            <Sidebar/>
            <Navbar/>
            <Table/>
        </div>
    )
}
export default Homepage;