import { useForm } from "react-hook-form";
import React, { useEffect, useState, useRef } from 'react'
import '../css/Academic.css';
import { FaArrowLeft } from "react-icons/fa"


export default function Academic() {
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


                <div className="container1_2">  {/* 타이틀, 뒤로 가기 */}
                    <div className="backIcon">
                        <FaArrowLeft className="backAca"/></div>  {/* 뒤로 가기 */}
                    <div className="title_Aca">학력 정보</div>  {/* 타이틀 */}
                </div>

                <div className="line__"></div>

                <div className="container3__">  {/* 타이틀 아래 */}
                    <div className="starDiv">
                        <p className='starInput'>*은 필수 입니다</p>
                    </div>

                    <div className="schoolInput_">  {/* 입력내용 */}
                        <p className='name1_'>학교 *</p>
                        <select 
                        className="selectSchool"
                        onChange={(e) => setSelectedSchoolBand(e.target.value)}>
                            <option selected disabled>선택</option>
                            {schoolBand.map(schoolBand => <option> {schoolBand}</option>)}
                        </select>
                        {/* 초중고는 막을 기능 추가 */}
                        <input 
                            className="school"
                            placeholder='학교명'
                        />
                    </div>

                    <div className="in__Input">    
                        <p className='name2_'>입학일 *</p>
                        <input 
                            className="in"
                            placeholder='입학일'
                        />
                    </div>
                    
                    <div className="out__Input">  {/* 입력내용 */}   
                        <p className='name3_'>졸업일[예정일] *</p>
                        <input 
                            className="out"
                            placeholder='졸업일'
                        />   
                    </div>

                {selectedSchoolBand === "대학원" || selectedSchoolBand ==="대학교"? 
                <div>
                    <div className="majorInputAca"> 
                        <p className='majorAca'>전공 </p>
                        <input 
                            placeholder='전공'
                        />
                    </div>

                    <div className="double_Input">  
                        <p className='name5'>부/복수/이중 전공 </p>
                        <select 
                        className="selectMajor"
                        onChange={(e) => setSelectedMajorBand(e.target.value)}>
                            <option selected disabled>선택</option>
                            {majorBand.map(majorBand => <option> {majorBand}</option>)}
                        </select>
                        <input 
                            className="double"
                            placeholder='부/복수 전공명'
                        />          
                    </div>
                    
                    <div className="degree__Input">  
                        <p className='degreeName'>학위 </p>
                        <input 
                            className="degree"
                            placeholder='학위'
                        /> 
                    </div>
                            
                    <div className="credit_Input"> 
                        <p className='name7'>학점 </p>
                        <input 
                            className="credit"
                            placeholder='학점'
                        /> 
                    </div>
                            
                    <div className="career_Input">  
                        <p className='name8'>수상 경력 </p>
                        <input 
                            className="career"
                            placeholder='수상 경력'
                        /> 
                    </div>
                </div> : null}

                    <div className="submitAca">  {/* 버튼 */}   
                        <button
                        //onClick={onClickConfirmButton}
                        //disabled={notAllow}
                        >
                        <p className='subm'>수정</p>
                        </button>
                    </div>
                    <div className="deleteAca">  {/* 버튼 */}   
                        <button
                        //onClick={onClickConfirmButton}
                        //disabled={notAllow}
                        >
                        <p className='subm'>삭제</p>
                        </button>
                    </div>
                        
                </div>


                <div className="container4"> {/* 하단 아이콘 */}   
                </div>
                    
            </div>

    )
}
