import { useForm } from "react-hook-form";
import React, { useEffect, useState, useRef } from 'react'
import '../css/Career.css';
import { FaArrowLeft } from "react-icons/fa"

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {ko} from "date-fns/esm/locale";


export default function Career() {
    const {register, watch, formState:{errors}, handleSubmit, getValues} = useForm();
    const [startDate, setStartDate] = useState(new Date());


    const onSubmit = (data) => {
        //congsole.log(data)

        //axios.post('/', data)
    }

    return (
        //<form onSubmit={handleSubmit(onSubmit)}>
            <div className="page">
                <div className="containerCa1" >  {/* 상단바 */}
                </div>
            

                <div className="containerCa2">  {/* 타이틀, 뒤로 가기 */}
                    <div className="back"> 
                    <FaArrowLeft className="backCa"/></div> 
                    <div className="titleCa">경력 정보</div>  {/* 타이틀 */}
                </div>

                <div className="line"></div>

                <div className="containerCa3">  {/* 타이틀 아래 */}
                    <div className="starDiv">
                        <p className='starInput'>*은 필수 입니다</p>
                    </div>



                    <div className="ca1Input">  {/* 입력내용 */}     
                        <p className='ca1Name'>회사 *</p>
                        <input 
                            placeholder='회사명을 입력하세요'
                        />
                    </div>
                    
                    <div className="ca2Input">  {/* 입력내용 */}   
                        <p className='ca2Name'>직무 능력 *</p>
                        <input 
                            placeholder='직무 능력에 대해 입력하세요'
                        />   
                    </div>
                    
                    <div className="ca3Input">  {/* 입력내용 */}
                        <p className='ca3Name'>담당 업무 * </p>
                        <input 
                            placeholder='담당했던 업무에 대해 입력하세요'
                        />
                    </div>
                    
                    <div className="ca4Input">  {/* 입력내용 */}
                        <p className='ca4Name'>입사일 * </p>
                        {/* <DatePicker
                            locale={ko}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy/ MM/ dd"
                        /> */}
                        <input
                            placeholder='yymmdd' />
                    </div>
                            
                    <div className="ca5Input">  {/* 입력내용 */}
                        <p className='ca5Name'>퇴사일 * </p>
                        {/* <DatePicker
                            locale={ko}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy/ MM/ dd"
                        /> */}
                        <input
                            placeholder='yymmdd' />
                    </div>
                            
                    <div className="submitCa">   
                        <button
                        //onClick={onClickConfirmButton}
                        //disabled={notAllow}
                        >
                        <p className='caSubm'>수정</p>
                        </button>
                    </div>

                    <div className="deleteCa">  {/* 버튼 */}   
                        <button
                        //onClick={onClickConfirmButton}
                        //disabled={notAllow}
                        >
                        <p className='caSubm'>삭제</p>
                        </button>
                    </div>
                        
                </div>


                <div className="containerCa4"> {/* 하단 아이콘 */}   
                </div>
                    
            </div>

    )
}
