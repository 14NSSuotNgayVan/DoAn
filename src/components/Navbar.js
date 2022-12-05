import regionImg from '../assets/img/Group 7324.png'
import bellImg from '../assets/img/bell.png'
import avtImg from '../assets/img/Group 1000001765.png'


const Navbar = () => {
    return (
        <div id ="Navbar">
            <div className="flex flex-row justify-between items-center">
                <p className="text-xl font-medium pl-[3%] py-[2%] ">Trường đại học A</p>
                <div className="flex flex-row justify-between w-[12%] items-center mr-16 my-6">
                    <img className="w-[35px] h-[35px]" src ={regionImg}></img>
                    <img className="w-[35px] h-[35px]" src ={bellImg}></img>
                    <img className="w-[35px] h-[35px]" src ={avtImg}></img>
                </div>
            </div>
            <div className="font-semibold px-[3%] py-[1%] shadow-[5px_1px_16px_rgba(0,0,0,0.1)] flex flex-row justify-between">
                <p className="w-[30%]">Tổ chức</p>
                <div className=""></div>
            </div>
        </div>
    )
}
export default Navbar;