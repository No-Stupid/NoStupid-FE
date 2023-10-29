import { useForm } from "react-hook-form";
import React, { useEffect, useState, useRef } from 'react'
import '../css/Profile.css';
import { FaUserPlus, FaArrowLeft } from "react-icons/fa"

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {ko} from "date-fns/esm/locale";


export default function Profile() {
    const {register, watch, formState:{errors}, handleSubmit, getValues} = useForm();
    const [startDate, setStartDate] = useState(new Date());


    const onSubmit = (data) => {
        //congsole.log(data)

        //axios.post('/', data)
    }

    return (
        //<form onSubmit={handleSubmit(onSubmit)}>
            <div className="page">          

                <div className="container1Pro">  {/* 타이틀, 뒤로 가기 */}
                    <div className="backPro">
                        <FaArrowLeft classname="FaArrowLeftPro" /></div>  {/* 뒤로 가기 */}
                    <div className="titlePro">프로필 편집</div>  {/* 타이틀 */}
                </div>

                <div className="linePro"></div>

                <div className="container2Pro">  {/* 타이틀 아래 */}
                
                    <div className="pictureInputPro"> 
                        <FaUserPlus className="FaUserPro"/>
                    </div>
                    
                    <div className="nameInputPro">  {/* 입력내용 */}   
                        <p className='namePro'>이름</p>
                        <input 
                            placeholder="원래 뜨는 이름"
                        />   
                    </div>
                    
                    <div className="oneInputPro">  {/* 입력내용 */}
                        <p className='oneNamePro'>한 줄 소개 </p>
                        <input 
                            placeholder="원래 뜨는 소개"
                        />
                    </div>
                    
                    <div className="birthInputPro">  {/* 입력내용 */}
                        <p className='birthPro'>생년월일 </p>
                        <input
                            placeholder="원래 뜨는 생일"
                        />
                   
                    </div>
                            
                    <div className="numInputPro">  {/* 입력내용 */}
                        <p className='numPro'>전화번호 </p>
                        <input 
                            placeholder="저장된 전화번호"
                        />
                    </div>

                    <div className="emailInputPro">  {/* 입력내용 */}
                        <p className='emailPro'>이메일 </p>
                        <input 
                            placeholder="저장된 이메일"
                        />
                    </div>

                    <div className="submitButtonPro">  {/* 버튼 */}   
                        <button
                        //onClick={onClickConfirmButton}
                        //disabled={notAllow}
                        >
                            <p className='submPro'>수정</p>
                        </button>
                    </div>
                        
                </div>


                <div className="container3Pro"> {/* 하단 아이콘 */}   
                </div>
                    
            </div>

    )
}
