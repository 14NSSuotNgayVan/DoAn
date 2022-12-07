import regionImg from '../assets/img/Group 7324.png'
import bellImg from '../assets/img/bell.png'
import avtImg from '../assets/img/Group 1000001765.png'


const Navbar = () => {
    return (
            <div className="flex flex-row justify-between items-center">
                <p className="text-xl font-medium pl-[3%] py-[2%] ">Trường đại học A</p>
                <div className="flex flex-row justify-between w-[12%] items-center mr-16 my-6">
                    <img className="w-[35px] h-[35px]" src ={regionImg}></img>
                    <img className="w-[35px] h-[35px]" src ={bellImg}></img>
                    <img className="w-[35px] h-[35px]" src ={avtImg}></img>
                </div>
            </div>

    )
}
export default Navbar;