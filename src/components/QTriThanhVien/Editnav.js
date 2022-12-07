import { useEffect, useState } from 'react';

const Editnav= ()=>{
    const [index,setIndex] = useState(0);
    return(
    <div id ="Edit" className={`font-semibold px-[3%] py-[1%] shadow-[5px_1px_16px_rgba(0,0,0,0.1)] flex flex-row justify-between items-center`}>
                <p className={`w-[30%] font-bold`}>Nghành nghề ({index})</p>
                <div className={`bg-[#1890FF] py-2 px-5 rounded`}>
                    <div className ={`inline-block pr-4`} >
                        <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.71252H11" stroke="#F7F7F8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg className ={`rotate-90 translate-y-[-75%]`} width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.71252H11" stroke="#F7F7F8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span className ={`text-white font-normal`}>Thêm ngành nghề</span>
                </div>
    </div>
    );
}
export default Editnav;