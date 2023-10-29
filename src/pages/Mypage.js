import { useForm } from "react-hook-form";
import React, { useEffect, useState, useRef } from 'react'
import '../css/Mypage.css';
import { FaUser, FaPen, FaPlus } from "react-icons/fa"



export default function Mypage() {
    const {register, watch, formState:{errors}, handleSubmit, getValues} = useForm();

    const onSubmit = (data) => {
        //congsole.log(data)

        //axios.post('/', data)
    }

    const schoolBand =[
        "초등학교",
        "중학교",
        "고등학교",
        "대학교",
        "대학원"
    ];
    const [selectedSchoolBand, setSelectedSchoolBand] = useState([]);

    const majorBand =[
        "부전공",
        "복수전공",
        "이중전공",
    ];
    const [selectedMajorBand, setSelectedMajorBand] = useState([]);

    return (
        //<form onSubmit={handleSubmit(onSubmit)}>
            <div className="page_">
            
                <div className="container1">  {/* 타이틀, 뒤로 가기 */}
                    <div className="title_">마이페이지</div>  {/* 타이틀 */}
                </div>

                <div className="line1"></div>

                <div className="container3_">  {/* 타이틀 아래 */}
  
                    <div className="profile_Input">  
                        <FaPen className="FaPen"/>
                        <FaUser className="FaUser"/>
                        <p className='name1'>***님</p>
                    </div>
                    <div className="line2"></div>

                    <div className="in_Input">  
                    <FaPlus className="FaPlus"/>
                        <p className='name2'>학력</p>
                        
                    </div>
                    <div className="line3"></div>

                    <div className="out_Input">
                    <FaPlus className="FaPlus"/>
                        <p className='name3'>경력</p>
                          
                    </div>
                    <div className="line4"></div>

                    <div className="degree_Input">  
                    <FaPlus className="FaPlus"/>
                        <p className='name6'>포트폴리오 </p>
                        
                    </div>
                        
                </div>


                <div className="container4"> {/* 하단 아이콘 */}   
                </div>
                    
            </div>

    )
}
