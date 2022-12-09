import { useEffect, useState } from 'react';
import axios from "axios";

const Editnav= ()=>{
    const[total,setTotal] = useState(0);
    const [open,setOpen] = useState(0);
    const[ipname,setIpname] = useState("");
    const headers ={
        Authorization:'Bearer '+localStorage.getItem("token"),
        'Content-Type': 'application/json',
    };
useEffect(()=>{
    axios.get('https://training.bks.center/api/field',{headers})
    .then(res=>{
        setTotal(res.data.length);
        console.log(total);
    })
    .catch(err=>{console.log(err);});

})
 const PostSV = ()=>{
    if(ipname==""){
        alert("Tên ngành nghề không được để trống !")
    }else{
        axios.post('https://training.bks.center/api/field',{params:{name:ipname}},
        {headers}).
        then(response => {
            console.log(response);
          })
          .catch((error)=> {
            console.log(error);})
        setOpen(0)
    }
 }

    return(    <div>
        <div id ="Edit" className={`font-semibold px-[3%] py-[1%] shadow-[5px_1px_16px_rgba(0,0,0,0.1)] flex flex-row justify-between items-center select-none roboto`}>
                    <p className={`w-[30%] font-bold`}>Nghành nghề ({total})</p>
                    <div className={`bg-[#1890FF] py-2 px-5 rounded hover:cursor-pointer hover:bg-[#0771d4]`} onClick={()=>{setOpen(1)}}>
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
        <div className ={`fixed modal-blur w-full h-full top-0 z-10 pt-24 ${open == 0 && "hidden"}`} onClick={()=>{}}>
            <div className = {`w-[75%] m-auto bg-white` } onClick={()=>{}}>
                <div className = {`relative font-medium border-b-[1px] border-solid border-[#E2E3E9] py-2 px-8`} >
                    <p className = {`p-2`}>Thêm ngành nghề</p>
                    <svg className = {`absolute top-0 right-[3%] translate-y-[25%] p-3 hover:bg-slate-100`} onClick={()=>{setOpen(0)}} width="40" height="40" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.09709 1.09789C1.15805 1.03677 1.23047 0.988286 1.3102 0.955203C1.38993 0.922119 1.4754 0.90509 1.56172 0.90509C1.64804 0.90509 1.73351 0.922119 1.81324 0.955203C1.89297 0.988286 1.96538 1.03677 2.02634 1.09789L5.49922 4.57208L8.97209 1.09789C9.03311 1.03687 9.10555 0.988472 9.18527 0.955451C9.26499 0.92243 9.35043 0.905434 9.43672 0.905434C9.52301 0.905434 9.60845 0.92243 9.68817 0.955451C9.76789 0.988472 9.84033 1.03687 9.90135 1.09789C9.96236 1.1589 10.0108 1.23134 10.0438 1.31106C10.0768 1.39078 10.0938 1.47622 10.0938 1.56251C10.0938 1.6488 10.0768 1.73425 10.0438 1.81397C10.0108 1.89369 9.96236 1.96612 9.90135 2.02714L6.42716 5.50001L9.90135 8.97289C9.96236 9.0339 10.0108 9.10634 10.0438 9.18606C10.0768 9.26578 10.0938 9.35122 10.0938 9.43751C10.0938 9.5238 10.0768 9.60925 10.0438 9.68897C10.0108 9.76869 9.96236 9.84112 9.90135 9.90214C9.84033 9.96315 9.76789 10.0116 9.68817 10.0446C9.60845 10.0776 9.52301 10.0946 9.43672 10.0946C9.35043 10.0946 9.26499 10.0776 9.18527 10.0446C9.10555 10.0116 9.03311 9.96315 8.97209 9.90214L5.49922 6.42795L2.02634 9.90214C1.96533 9.96315 1.89289 10.0116 1.81317 10.0446C1.73345 10.0776 1.64801 10.0946 1.56172 10.0946C1.47543 10.0946 1.38999 10.0776 1.31027 10.0446C1.23055 10.0116 1.15811 9.96315 1.09709 9.90214C1.03608 9.84112 0.987679 9.76869 0.954658 9.68897C0.921636 9.60925 0.90464 9.5238 0.90464 9.43751C0.90464 9.35122 0.921636 9.26578 0.954658 9.18606C0.987679 9.10634 1.03608 9.0339 1.09709 8.97289L4.57128 5.50001L1.09709 2.02714C1.03598 1.96618 0.987493 1.89376 0.954409 1.81403C0.921326 1.7343 0.904297 1.64883 0.904297 1.56251C0.904297 1.47619 0.921326 1.39072 0.954409 1.31099C0.987493 1.23127 1.03598 1.15885 1.09709 1.09789Z" fill="#42526E"/>
                    </svg>
                </div>
                <div className={`flex flex-row #E2E3E9 pt-2 pb-12 px-8 border-b-[1px] border-solid border-[#E2E3E9]`}>
                    <div className={`w-1/2 pl-4`}>
                        <p className={`p-2 text-sm font-medium`}>Mã ngành nghề</p>
                        <p className={`p-1 border-[1px] border-solid border-[#E2E3E9] outline-[#c4c4c4] w-5/6 rounded-[3px] cursor-default h-[32px]`}></p>
                    </div>
                    <div className={`w-1/2 pl-4`}>
                        <p className={`p-2 text-sm font-medium`}>Tên ngành nghề</p>
                        <input type="text" className={`p-1 border-[1px] border-solid border-[#E2E3E9] outline-[#c4c4c4] w-5/6 rounded-[3px]`} onChange={(e)=>{setIpname(e.target.value);console.log(ipname)}}></input>
                    </div>
                </div>
                <div className={`flex flex-row justify-end px-6 py-2`}>
                    <div className={`px-4 py-2 rounded-[3px] border-[1px] border-solid border-[#E2E3E9] text-sm mr-[1%] text-[#172B4D] hover:bg-[#F0F7FF] cursor-pointer`} onClick={()=>{setOpen(0)}}>Hủy</div>
                    <div className={`px-4 py-2 rounded-[3px] bg-[#1890FF] text-sm text-white hover:bg-[#146ec2] cursor-pointer`} onClick={()=>{PostSV()}}>Thêm</div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Editnav;