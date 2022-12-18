import { useEffect, useState } from 'react';
import axios from "axios";
import UAD from "./UpdateAndDelete.js";
const Table = ()=>{
    const [NewList,setNewList] = useState([]);
    const [open,setOpen] = useState(0);
    const[ipname,setIpname] = useState("");
    const [IDval,setIDval] = useState("");
    const [Nameval,setNameval] = useState("");
    const[reload,setReload] = useState(true);
    const[Total,setTotal] = useState(0);
    const [FirstIndexOfPage,setFirstIndexOfPage] = useState(0);
    const [LastIndexOfPage,setLastIndexOfPage] = useState(10);
    const [CurrentPage,setCurrentPage] = useState(1);
    const [NewsPerPage,setNewsPerPage] = useState(10);
    const [PageNumber,setPageNumber] = useState([]);
    const[NewsPerPageIndex,setNewsPerPageIndex] = useState([10,20,30]);
    const [Stt,setStt] = useState(0);
    console.log("day la phan khai bao")
    const headers ={
        Authorization:'Bearer '+localStorage.getItem("token"),
    };
    useEffect(()=>{
        let lastIndex = CurrentPage*NewsPerPage;
        let firstIndex = lastIndex - NewsPerPage;
        console.log("day la usseEfect")
        axios.get('https://training.bks.center/api/field',{headers})
        .then(res=>{
            // dat gia tri cho chi so dau va cuoi trang
            if(lastIndex > res.data.length)
            {
                lastIndex = res.data.length;
                firstIndex=(CurrentPage-1)*NewsPerPage;
            }
            setLastIndexOfPage(lastIndex);
            setFirstIndexOfPage(firstIndex);
            // lay danh sach chi so trang 
            let a =[];
            PageNumber.length = 0 ;
            let pagenum = res.data.length/NewsPerPage;
            console.log(pagenum);
            if(pagenum > Math.ceil(res.data.length/NewsPerPage)) {pagenum = pagenum+1;}
            else {pagenum = Math.ceil(res.data.length/NewsPerPage)}
            for(let i=1;i<=pagenum; i++){
                PageNumber.push(i);
            }
            console.log(PageNumber);
            //Lay du lieu cho trang hien tai
            console.log(res);
            setTotal(res.data.length);
            setNewList(res.data.slice(firstIndex,lastIndex));
            console.log(NewList);
        })
        .catch(err=>{console.log(err);});
        
        
    },[reload,CurrentPage,NewsPerPage]);
    const PostSV = ()=>{
        console.log("day la ham post")
        if(ipname==""){
            alert("Tên ngành nghề không được để trống !")
        }else{
            axios.post('https://training.bks.center/api/field',
            {},
            {headers,params:{name:ipname}}).
            then(response => {
                console.log(response);
            })
            .catch((error)=> {
                console.log(error);})
                setOpen(0);
            setReload(!reload);
        }
    }
    const UpDate = (val)=>{
        console.log("day la ham update")
        if(ipname==""){
            alert("Tên ngành nghề không được để trống !")
        }else{
            axios.put('https://training.bks.center/api/field/'+ val,
            {},
            {headers,params:{name:ipname}}).
            then(response => {
                console.log(response);
                console.log("update thanh cong")
            })
            .catch((error)=> {
                console.log(error);})
                setOpen(0);
            setReload(!reload);
            console.log(reload);
        }
    }
    const Delete = (val)=>{
        console.log("day la ham delete")
            axios.delete('https://training.bks.center/api/field/'+ val,
            {headers}).
            then(response => {
                console.log(response);
                console.log("delete thanh cong")
            })
            .catch((error)=> {
                console.log(error);})
                setOpen(0);
            setReload(!reload);
            console.log(reload);
        
    }
    //phan trang



    return(
        <>
        {/* thanh chinh sua */}
        {console.log("day la ham return")}
        <div id ="Edit" className={`font-semibold px-[3%] py-[1%] shadow-[5px_1px_16px_rgba(0,0,0,0.1)] flex flex-row justify-between items-center select-none roboto`}>
            <p className={`w-[30%] font-bold`}>Nghành nghề ({Total})</p>
            <div className={`bg-[#1890FF] py-2 px-5 rounded hover:cursor-pointer hover:bg-[#0771d4]`} onClick={()=>{setOpen(1)}}>
                <div className ={`inline-block pr-4`} >
                    <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.71252H11" stroke="#F7F7F8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg className ={`rotate-90 translate-y-[-75%]`} width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.71252H11" stroke="#F7F7F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <span className ={`text-white font-normal`}>Thêm ngành nghề</span>
            </div>
        </div>
        {/* modal */}
        <div className ={`fixed modal-blur w-full h-full top-0 z-10 pt-24 ${open == 0 && "hidden"}`} onClick={()=>{}}>
            <div className = {`w-[75%] m-auto bg-white` } onClick={()=>{}}>
                <div className = {`relative font-medium border-b-[1px] border-solid border-[#E2E3E9] py-2 px-8`} >
                    <p className = {`p-2 ${open!=1 && "hidden"}`}>Thêm ngành nghề</p>
                    <p className = {`p-2 ${open!=2 && "hidden"}`}>Sửa ngành nghề</p>
                    <svg className = {`absolute top-0 right-[3%] translate-y-[25%] p-3 hover:bg-slate-100`} onClick={()=>{setOpen(0)}} width="40" height="40" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.09709 1.09789C1.15805 1.03677 1.23047 0.988286 1.3102 0.955203C1.38993 0.922119 1.4754 0.90509 1.56172 0.90509C1.64804 0.90509 1.73351 0.922119 1.81324 0.955203C1.89297 0.988286 1.96538 1.03677 2.02634 1.09789L5.49922 4.57208L8.97209 1.09789C9.03311 1.03687 9.10555 0.988472 9.18527 0.955451C9.26499 0.92243 9.35043 0.905434 9.43672 0.905434C9.52301 0.905434 9.60845 0.92243 9.68817 0.955451C9.76789 0.988472 9.84033 1.03687 9.90135 1.09789C9.96236 1.1589 10.0108 1.23134 10.0438 1.31106C10.0768 1.39078 10.0938 1.47622 10.0938 1.56251C10.0938 1.6488 10.0768 1.73425 10.0438 1.81397C10.0108 1.89369 9.96236 1.96612 9.90135 2.02714L6.42716 5.50001L9.90135 8.97289C9.96236 9.0339 10.0108 9.10634 10.0438 9.18606C10.0768 9.26578 10.0938 9.35122 10.0938 9.43751C10.0938 9.5238 10.0768 9.60925 10.0438 9.68897C10.0108 9.76869 9.96236 9.84112 9.90135 9.90214C9.84033 9.96315 9.76789 10.0116 9.68817 10.0446C9.60845 10.0776 9.52301 10.0946 9.43672 10.0946C9.35043 10.0946 9.26499 10.0776 9.18527 10.0446C9.10555 10.0116 9.03311 9.96315 8.97209 9.90214L5.49922 6.42795L2.02634 9.90214C1.96533 9.96315 1.89289 10.0116 1.81317 10.0446C1.73345 10.0776 1.64801 10.0946 1.56172 10.0946C1.47543 10.0946 1.38999 10.0776 1.31027 10.0446C1.23055 10.0116 1.15811 9.96315 1.09709 9.90214C1.03608 9.84112 0.987679 9.76869 0.954658 9.68897C0.921636 9.60925 0.90464 9.5238 0.90464 9.43751C0.90464 9.35122 0.921636 9.26578 0.954658 9.18606C0.987679 9.10634 1.03608 9.0339 1.09709 8.97289L4.57128 5.50001L1.09709 2.02714C1.03598 1.96618 0.987493 1.89376 0.954409 1.81403C0.921326 1.7343 0.904297 1.64883 0.904297 1.56251C0.904297 1.47619 0.921326 1.39072 0.954409 1.31099C0.987493 1.23127 1.03598 1.15885 1.09709 1.09789Z" fill="#42526E"/>
                    </svg>
                </div>
                <div className={`flex flex-row #E2E3E9 pt-2 pb-12 px-8 border-b-[1px] border-solid border-[#E2E3E9]`}>
                    <div className={`w-1/2 pl-4`}>
                        <p className={`p-2 text-sm font-medium`}>Mã ngành nghề</p>
                        <p className={`p-1 border-[1px] border-solid border-[#E2E3E9] outline-[#c4c4c4] w-5/6 rounded-[3px] cursor-default h-[32px] ${open!=1 &&"hidden"}`}></p>
                        <p className={`p-1 border-[1px] border-solid border-[#E2E3E9] outline-[#c4c4c4] w-5/6 rounded-[3px] cursor-default h-[32px] ${open!=2 &&"hidden"}`}>{IDval}</p>
                    </div>
                    <div className={`w-1/2 pl-4`}>
                        <p className={`p-2 text-sm font-medium`}>Tên ngành nghề</p>
                        <input type="text" className={`${open!=1 && "hidden"} p-1 border-[1px] border-solid border-[#E2E3E9] outline-[#c4c4c4] w-5/6 rounded-[3px]`} onChange={(e)=>{setIpname(e.target.value);console.log(ipname)}}></input>
                        <input placeHolder = {Nameval}  type="text" className={`${open!=2 && "hidden"} p-1 border-[1px] border-solid border-[#E2E3E9] outline-[#c4c4c4] w-5/6 rounded-[3px]`} onChange={(e)=>{setIpname(e.target.value);console.log(ipname)}}></input>
                    </div>
                </div>
                <div className={`flex flex-row justify-end px-6 py-2`}>
                    <div className={`px-4 py-2 rounded-[3px] border-[1px] border-solid border-[#E2E3E9] text-sm mr-[1%] text-[#172B4D] hover:bg-[#F0F7FF] cursor-pointer`} onClick={()=>{setOpen(0)}}>Hủy</div>
                    <div className={`px-4 py-2 rounded-[3px] bg-[#1890FF] text-sm text-white hover:bg-[#146ec2] cursor-pointer ${open!=1 &&"hidden"}`} onClick={()=>{PostSV()}}>Thêm</div>
                    <div className={`px-4 py-2 rounded-[3px] bg-[#1890FF] text-sm text-white hover:bg-[#146ec2] cursor-pointer ${open!=2 &&"hidden"}`} onClick={()=>{UpDate(IDval)}}>Sửa</div>
                </div>
            </div>
        </div>
        {/* table */}
        <div className={`flex p-6 scroll  h-[65vh]`}>
            <table className={`border-[#F0F0F0] text-center m-auto w-[100%]`}>
                    <tr className={`roboto font-medium bg-[#FAFAFA]`}>
                        <td className={` hover:bg-[#ddd] border-r-0 seperate w-[5%] align-middle`}>STT</td>
                        <td className ={`hover:bg-[#ddd] border-r-0 border-l-0 seperate w-[7%] align-middle`}>
                            <div className={`flex flex-row justify-center w-full h-full`}>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0.5C16.3125 0.5 19.5 1.8125 21.8375 4.1625C22.9998 5.3219 23.9216 6.69941 24.5501 8.21599C25.1786 9.73257 25.5014 11.3583 25.5 13C25.5 16.3125 24.1875 19.5 21.8375 21.8375C20.6781 22.9998 19.3006 23.9216 17.784 24.5501C16.2674 25.1786 14.6417 25.5014 13 25.5C9.6875 25.5 6.5 24.1875 4.1625 21.8375C3.00025 20.6781 2.07841 19.3006 1.4499 17.784C0.821391 16.2674 0.498582 14.6417 0.500005 13C0.500005 6.125 6.125 0.5 13 0.5ZM13 3C7.475 3 3 7.475 3 13C3 18.525 7.475 23 13 23C18.525 23 23 18.525 23 13C23 10.35 21.95 7.8 20.075 5.925C18.1974 4.05105 15.6528 2.99901 13 3ZM14.875 15.5L17.4375 19.05C16.1875 19.9625 14.6625 20.5 13 20.5C11.3375 20.5 9.8125 19.9625 8.5625 19.05L11.125 15.5C11.675 15.9 12.3125 16.125 13 16.125C13.6875 16.125 14.325 15.9 14.875 15.5ZM13 11.75C13.6875 11.75 14.25 12.3125 14.25 13C14.25 13.6875 13.6875 14.25 13 14.25C12.3125 14.25 11.75 13.6875 11.75 13C11.75 12.3125 12.3125 11.75 13 11.75ZM9.65 6.2875L11.6 10.2C10.575 10.7125 9.875 11.75 9.875 13H5.5C5.5 10.0625 7.1875 7.525 9.65 6.2875ZM16.35 6.2875C18.8125 7.525 20.5 10.0625 20.5 13H16.125C16.125 11.75 15.425 10.7125 14.4 10.2L16.35 6.2875Z" fill="#172B4D"/>
                                </svg>
                            </div>
                        </td>
                        <td className={`hover:bg-[#ddd] border-r-0 border-l-0 seperate w-[48%] align-middle`}>
                            <div className={`flex flex-row justify-center`}>
                                <div className={`flex flex-row justify-start items-center`}>
                                    <div className={`inline-block pr-2`}>
                                        <svg className={`mb-[3px]`} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.65975 1.29872C4.69358 1.33168 4.83825 1.45613 4.95725 1.57206C5.70567 2.25172 6.93067 4.02473 7.30458 4.95272C7.36467 5.09365 7.49183 5.44996 7.5 5.64033C7.5 5.82275 7.458 5.99664 7.37283 6.16258C7.25383 6.36943 7.06658 6.53537 6.8455 6.62629C6.69208 6.68482 6.233 6.77574 6.22483 6.77574C5.72258 6.86667 4.9065 6.91668 4.00467 6.91668C3.14542 6.91668 2.36258 6.86667 1.85275 6.79223C1.84458 6.7837 1.27408 6.69278 1.07867 6.59333C0.721667 6.41091 0.5 6.05461 0.5 5.67329V5.64033C0.50875 5.392 0.730417 4.86975 0.738583 4.86975C1.11308 3.99177 2.278 2.25967 3.05208 1.56354C3.05208 1.56354 3.251 1.36748 3.37525 1.28224C3.55375 1.14926 3.77483 1.08334 3.99592 1.08334C4.24267 1.08334 4.4725 1.15779 4.65975 1.29872" stroke="#9EA3A9"/>
                                        </svg>
                                        <svg className={`rotate-180`} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.65975 1.29872C4.69358 1.33168 4.83825 1.45613 4.95725 1.57206C5.70567 2.25172 6.93067 4.02473 7.30458 4.95272C7.36467 5.09365 7.49183 5.44996 7.5 5.64033C7.5 5.82275 7.458 5.99664 7.37283 6.16258C7.25383 6.36943 7.06658 6.53537 6.8455 6.62629C6.69208 6.68482 6.233 6.77574 6.22483 6.77574C5.72258 6.86667 4.9065 6.91668 4.00467 6.91668C3.14542 6.91668 2.36258 6.86667 1.85275 6.79223C1.84458 6.7837 1.27408 6.69278 1.07867 6.59333C0.721667 6.41091 0.5 6.05461 0.5 5.67329V5.64033C0.50875 5.392 0.730417 4.86975 0.738583 4.86975C1.11308 3.99177 2.278 2.25967 3.05208 1.56354C3.05208 1.56354 3.251 1.36748 3.37525 1.28224C3.55375 1.14926 3.77483 1.08334 3.99592 1.08334C4.24267 1.08334 4.4725 1.15779 4.65975 1.29872" stroke="#9EA3A9"/>
                                        </svg>
                                    </div>
                                    <span className={`inline-block `}>Mã ngành nghề</span>
                                </div>
                            </div>
                        </td>
                        <td className={`hover:bg-[#ddd] border-l-0 align-middle w-[40%]`}>
                            <div className={`flex flex-row justify-center`}>
                                <div className={`flex flex-row justify-start items-center`}>
                                    <div className={`inline-block pr-2`}>
                                        <svg className={`mb-[3px]`} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.65975 1.29872C4.69358 1.33168 4.83825 1.45613 4.95725 1.57206C5.70567 2.25172 6.93067 4.02473 7.30458 4.95272C7.36467 5.09365 7.49183 5.44996 7.5 5.64033C7.5 5.82275 7.458 5.99664 7.37283 6.16258C7.25383 6.36943 7.06658 6.53537 6.8455 6.62629C6.69208 6.68482 6.233 6.77574 6.22483 6.77574C5.72258 6.86667 4.9065 6.91668 4.00467 6.91668C3.14542 6.91668 2.36258 6.86667 1.85275 6.79223C1.84458 6.7837 1.27408 6.69278 1.07867 6.59333C0.721667 6.41091 0.5 6.05461 0.5 5.67329V5.64033C0.50875 5.392 0.730417 4.86975 0.738583 4.86975C1.11308 3.99177 2.278 2.25967 3.05208 1.56354C3.05208 1.56354 3.251 1.36748 3.37525 1.28224C3.55375 1.14926 3.77483 1.08334 3.99592 1.08334C4.24267 1.08334 4.4725 1.15779 4.65975 1.29872" stroke="#9EA3A9"/>
                                        </svg>
                                        <svg className={`rotate-180`} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.65975 1.29872C4.69358 1.33168 4.83825 1.45613 4.95725 1.57206C5.70567 2.25172 6.93067 4.02473 7.30458 4.95272C7.36467 5.09365 7.49183 5.44996 7.5 5.64033C7.5 5.82275 7.458 5.99664 7.37283 6.16258C7.25383 6.36943 7.06658 6.53537 6.8455 6.62629C6.69208 6.68482 6.233 6.77574 6.22483 6.77574C5.72258 6.86667 4.9065 6.91668 4.00467 6.91668C3.14542 6.91668 2.36258 6.86667 1.85275 6.79223C1.84458 6.7837 1.27408 6.69278 1.07867 6.59333C0.721667 6.41091 0.5 6.05461 0.5 5.67329V5.64033C0.50875 5.392 0.730417 4.86975 0.738583 4.86975C1.11308 3.99177 2.278 2.25967 3.05208 1.56354C3.05208 1.56354 3.251 1.36748 3.37525 1.28224C3.55375 1.14926 3.77483 1.08334 3.99592 1.08334C4.24267 1.08334 4.4725 1.15779 4.65975 1.29872" stroke="#9EA3A9"/>
                                        </svg>
                                    </div>
                                    <span className={`inline-block `}>Ngành nghề</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className={``}>
                        <td className={`p-3`}>
                            <div className ={`flex items-center justify-center p-2 rounded-[4px] border-[1px] border-solid border-[#E2E3E9] hover:bg-[#F0F7FF]`}>
                                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.875 6.42037L16.0796 5.625L13.5 8.20463L10.9204 5.625L10.125 6.42037L12.7046 9L10.125 11.5791L10.9209 12.375L13.5 9.79537L16.0802 12.375L16.875 11.5802L14.2954 9L16.875 6.42037Z" fill="#1890FF"/>
                                    <path d="M2.25 2.25C1.95163 2.25 1.66548 2.36853 1.4545 2.5795C1.24353 2.79048 1.125 3.07663 1.125 3.375V5.15812C1.12496 5.30594 1.15405 5.45232 1.21061 5.5889C1.26717 5.72547 1.35008 5.84955 1.45463 5.95406L5.625 10.125V14.625C5.625 14.9234 5.74353 15.2095 5.9545 15.4205C6.16548 15.6315 6.45163 15.75 6.75 15.75H9C9.29837 15.75 9.58452 15.6315 9.7955 15.4205C10.0065 15.2095 10.125 14.9234 10.125 14.625V13.5H9V14.625H6.75V9.65812L6.42037 9.32906L2.25 5.15869V3.375H13.5V4.5H14.625V3.375C14.625 3.07663 14.5065 2.79048 14.2955 2.5795C14.0845 2.36853 13.7984 2.25 13.5 2.25H2.25Z" fill="#1890FF"/>
                                </svg>
                            </div>
                        </td>
                        <td colSpan ={3} className={`p-3 align-middle`}>
                            <div className={`flex flex-row`}>
                                <p className={`w-[10%] p-1 border-[1px] border-solid border-[#E2E3E9] rounded-[4px] text-[14px] text-[#1890FF] hover:bg-[#F0F7FF]`}>Tìm kiếm</p>
                                <div className ={`flex items-center w-[42%] ml-[4%] mr-[2%]`}><input className={`p-1 border-[1px] border-solid border-[#E2E3E9] rounded-[4px] w-full outline-[#c4c4c4]`} type="text"></input></div>
                                <div className ={`flex items-center grow`}><input className={`p-1 border-[1px] border-solid border-[#E2E3E9] rounded-[4px] w-full outline-[#c4c4c4]`} type="text"></input></div>
                            </div>
                        </td>
                    </tr>
                { 
                NewList.map((values,index) => {
                    
                    return(
                    <tr className={``}>
                        <td className={`w-[5%] text-center align-middle`}>{index+FirstIndexOfPage+1}</td>
                        {/* day la nut chinh sua */}
                        <td className={`w-[7%] align-middle`}>
                            <div className={`group`}>
                                <svg className={`inline-block group-hover:bg-[#F0F7FF]`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="2.25" stroke="#98BEE1" stroke-width="1.5" />
                                    <g clip-path="url(#clip0_83_2931)">
                                        <path d="M16 18.25C17.2426 18.25 18.25 17.2426 18.25 16C18.25 14.7574 17.2426 13.75 16 13.75C14.7574 13.75 13.75 14.7574 13.75 16C13.75 17.2426 14.7574 18.25 16 18.25Z" stroke="#98BEE1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.55 18.25C21.4502 18.4762 21.4204 18.7271 21.4645 18.9704C21.5086 19.2137 21.6246 19.4382 21.7975 19.615L21.8425 19.66C21.982 19.7993 22.0926 19.9647 22.1681 20.1468C22.2436 20.3289 22.2824 20.5241 22.2824 20.7213C22.2824 20.9184 22.2436 21.1136 22.1681 21.2957C22.0926 21.4778 21.982 21.6432 21.8425 21.7825C21.7032 21.922 21.5378 22.0326 21.3557 22.1081C21.1736 22.1836 20.9784 22.2224 20.7812 22.2224C20.5841 22.2224 20.3889 22.1836 20.2068 22.1081C20.0247 22.0326 19.8593 21.922 19.72 21.7825L19.675 21.7375C19.4982 21.5646 19.2737 21.4486 19.0304 21.4045C18.7871 21.3604 18.5362 21.3902 18.31 21.49C18.0882 21.5851 17.899 21.7429 17.7657 21.9442C17.6325 22.1454 17.561 22.3812 17.56 22.6225V22.75C17.56 23.1478 17.402 23.5294 17.1207 23.8107C16.8394 24.092 16.4578 24.25 16.06 24.25C15.6622 24.25 15.2806 24.092 14.9993 23.8107C14.718 23.5294 14.56 23.1478 14.56 22.75V22.6825C14.5542 22.4343 14.4738 22.1935 14.3294 21.9915C14.1849 21.7896 13.9831 21.6357 13.75 21.55C13.5238 21.4502 13.2729 21.4204 13.0296 21.4645C12.7863 21.5086 12.5618 21.6246 12.385 21.7975L12.34 21.8425C12.2007 21.982 12.0353 22.0926 11.8532 22.1681C11.6711 22.2436 11.4759 22.2824 11.2787 22.2824C11.0816 22.2824 10.8864 22.2436 10.7043 22.1681C10.5222 22.0926 10.3568 21.982 10.2175 21.8425C10.078 21.7032 9.9674 21.5378 9.89191 21.3557C9.81642 21.1736 9.77757 20.9784 9.77757 20.7812C9.77757 20.5841 9.81642 20.3889 9.89191 20.2068C9.9674 20.0247 10.078 19.8593 10.2175 19.72L10.2625 19.675C10.4354 19.4982 10.5514 19.2737 10.5955 19.0304C10.6396 18.7871 10.6098 18.5362 10.51 18.31C10.4149 18.0882 10.2571 17.899 10.0558 17.7657C9.85463 17.6325 9.61884 17.561 9.3775 17.56H9.25C8.85218 17.56 8.47064 17.402 8.18934 17.1207C7.90804 16.8394 7.75 16.4578 7.75 16.06C7.75 15.6622 7.90804 15.2806 8.18934 14.9993C8.47064 14.718 8.85218 14.56 9.25 14.56H9.3175C9.56575 14.5542 9.8065 14.4738 10.0085 14.3294C10.2104 14.1849 10.3643 13.9831 10.45 13.75C10.5498 13.5238 10.5796 13.2729 10.5355 13.0296C10.4914 12.7863 10.3754 12.5618 10.2025 12.385L10.1575 12.34C10.018 12.2007 9.9074 12.0353 9.83191 11.8532C9.75642 11.6711 9.71757 11.4759 9.71757 11.2787C9.71757 11.0816 9.75642 10.8864 9.83191 10.7043C9.9074 10.5222 10.018 10.3568 10.1575 10.2175C10.2968 10.078 10.4622 9.9674 10.6443 9.89191C10.8264 9.81642 11.0216 9.77757 11.2188 9.77757C11.4159 9.77757 11.6111 9.81642 11.7932 9.89191C11.9753 9.9674 12.1407 10.078 12.28 10.2175L12.325 10.2625C12.5018 10.4354 12.7263 10.5514 12.9696 10.5955C13.2129 10.6396 13.4638 10.6098 13.69 10.51H13.75C13.9718 10.4149 14.161 10.2571 14.2943 10.0558C14.4275 9.85463 14.499 9.61884 14.5 9.3775V9.25C14.5 8.85218 14.658 8.47064 14.9393 8.18934C15.2206 7.90804 15.6022 7.75 16 7.75C16.3978 7.75 16.7794 7.90804 17.0607 8.18934C17.342 8.47064 17.5 8.85218 17.5 9.25V9.3175C17.501 9.55884 17.5725 9.79463 17.7057 9.99585C17.839 10.1971 18.0282 10.3549 18.25 10.45C18.4762 10.5498 18.7271 10.5796 18.9704 10.5355C19.2137 10.4914 19.4382 10.3754 19.615 10.2025L19.66 10.1575C19.7993 10.018 19.9647 9.9074 20.1468 9.83191C20.3289 9.75642 20.5241 9.71757 20.7213 9.71757C20.9184 9.71757 21.1136 9.75642 21.2957 9.83191C21.4778 9.9074 21.6432 10.018 21.7825 10.1575C21.922 10.2968 22.0326 10.4622 22.1081 10.6443C22.1836 10.8264 22.2224 11.0216 22.2224 11.2188C22.2224 11.4159 22.1836 11.6111 22.1081 11.7932C22.0326 11.9753 21.922 12.1407 21.7825 12.28L21.7375 12.325C21.5646 12.5018 21.4486 12.7263 21.4045 12.9696C21.3604 13.2129 21.3902 13.4638 21.49 13.69V13.75C21.5851 13.9718 21.7429 14.161 21.9442 14.2943C22.1454 14.4275 22.3812 14.499 22.6225 14.5H22.75C23.1478 14.5 23.5294 14.658 23.8107 14.9393C24.092 15.2206 24.25 15.6022 24.25 16C24.25 16.3978 24.092 16.7794 23.8107 17.0607C23.5294 17.342 23.1478 17.5 22.75 17.5H22.6825C22.4412 17.501 22.2054 17.5725 22.0042 17.7057C21.8029 17.839 21.6451 18.0282 21.55 18.25V18.25Z" stroke="#98BEE1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_83_2931">
                                            <rect width="18" height="18" fill="white" transform="translate(7 7)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className={`absolute top-[30%] left-[50%] w-[100%] text-left rounded shadow-[2px_8px_5px_rgba(0,0,0,0.25)] overflow-hidden"} animate-dropdown ml-5 group-hover:block z-50 bg-white text-center hidden`}>
                                    <button className={`py-3 cursor-pointer hover:text-[#1890FF] hover:bg-[#F0F7FF] block w-full`} onClick={(e) =>{setOpen(2);setIDval(values.id);setNameval(values.name);console.log(values.id)}}>Sửa</button>
                                    <button className={`py-3 cursor-pointer hover:text-[#1890FF] hover:bg-[#F0F7FF] block w-full`} onClick={() =>{Delete(values.id)}}>Xóa</button>
                                </div>
                            </div>
                        </td>
                        <td className={`border-r-0 border-l-0 align-middle`}>{values.id}</td>
                        <td className={`border-l-0 align-middle`}>{values.name}</td>
                    </tr>
                    )
                }
                    
                )}
                

            </table>
        </div>
        <div className ={`flex justify-end py-4 px-8 select-none`}>
            <p className={`p-1`}> {FirstIndexOfPage+1} - {LastIndexOfPage} trên {Total} ngành nghề</p>
            <svg className ={`px-2 items-center align-middle hover:bg-slate-100`} onClick={()=>{if(CurrentPage !=1) setCurrentPage(CurrentPage-1)}} width="24" height="32" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className ={`hover:`} d="M8.5 1L1.5 8L8.5 15" stroke="#DFE1E6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <ul className ={`flex justify-between list-none text-[#1890FF] text-sm items-center`}>
                {
                    PageNumber.map((index)=>
                        <li value = {index} className ={`block px-[10px] py-1 hover:border-[1px] hover:border-solid hover:border-[#1890FF] rounded-[3px] cursor-default hover:bg-slate-100 ${index == CurrentPage && "pagination-active"}`} onClick={(e) =>{setCurrentPage(e.target.value)}}>{index}</li>
                    )
                }
            </ul>
            <svg className ={`px-2 rotate-180 items-center hover:bg-slate-100`} onClick={()=>{if(CurrentPage!= PageNumber.length)setCurrentPage(CurrentPage+1)}} width="24" height="32" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 1L1.5 8L8.5 15" stroke="#DFE1E6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <select className ={`mx-2 p-1 border-solid border-[1px] border-[#DFE1E6] rounded-[3px]`} onChange={(e)=>{setNewsPerPage(e.target.value);setCurrentPage(1)}}>
                {
                    NewsPerPageIndex.map((values)=>
                        <option value = {values}>{values} / trang</option>
                )
                }
            </select>
        </div>
        </>
    )
}

export default Table;