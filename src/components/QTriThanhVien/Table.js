import { useEffect, useState } from 'react';
import axios from "axios";
import UAD from "./UpdateAndDelete.js";
const Table = ()=>{
    const [stt,setStt] = useState(0);
    const [value,setValue] = useState([]);
    useEffect(()=>{
        const headers ={
            Authorization:'Bearer '+localStorage.getItem("token"),
        };
        axios.get('https://training.bks.center/api/field',{headers})
        .then(res=>{
            console.log(res);
        setValue(res.data);
        })
        .catch(err=>{console.log(err);});
    });
    return(
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
                value.map((values,index) => 
                    <tr className={``}>
                        <td className={`w-[5%] text-center align-middle`}>{index+1}</td>
                        <td className ={`w-[7%] align-middle`}><UAD/></td>
                        <td className={`border-r-0 border-l-0 align-middle`}>{values.id}</td>
                    <td className={`border-l-0 align-middle`}>{values.name}</td>
                </tr>
                
                )}
                
            </table>
        </div>
    )
}

export default Table;