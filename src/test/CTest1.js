import { useForm } from "react-hook-form";
import React, { useEffect, useState, useRef } from 'react'
import '../css/Career.css';

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {ko} from "date-fns/esm/locale";

export default function CTest() {
    const {register, watch, formState:{errors}, handleSubmit, getValues} = useForm();
    const [startDate, setStartDate] = useState(new Date());

    const onSubmit = (data) => {
        //congsole.log(data)

        //axios.post('/', data)
    }

    return (
        //<form onSubmit={handleSubmit(onSubmit)}>
            <div className="page">
                <div className="container1" >  {/* 상단바 */}
                </div>
            

                <div className="container2">  {/* 타이틀, 뒤로 가기 */}
                    <div className="back"> ( </div>  {/* 뒤로 가기 */}
                    <div className="title">경력 정보</div>  {/* 타이틀 */}
                </div>

                <div className="line"></div>

                <div className="container3">  {/* 타이틀 아래 */}
                    <div className="starDiv">
                        <p className='starInput'>*은 필수 입니다</p>
                    </div>


                

                    <div className="degreeInput">  {/* 입력내용 */}
                        <p className='name6'>입사일 * </p>
                        <DatePicker
                            className="degree"
                            locale={ko}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy/ MM/ dd"
                        />
                       
                    </div>
                            
                    <div className="creditInput">  {/* 입력내용 */}
                        <p className='name7'>퇴사일 * </p>
                        <DatePicker
                            className="credit"
                            locale={ko}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy/ MM/ dd"
                            label ='날짜를 선택해 주세요'

                        />
                    
                    </div>
                            
                    <div className="submit1">  {/* 버튼 */}   
                        <button
                        //onClick={onClickConfirmButton}
                        //disabled={notAllow}
                        className='submButton1'>
                        <p className='subm1'>+ 경력추가</p>
                        </button>
                    </div>

                    <div className="submit2">  {/* 버튼 */}   
                        <button
                        //onClick={onClickConfirmButton}
                        //disabled={notAllow}
                        className='submButton2'>
                        <p className='subm2'>제출</p>
                        </button>
                    </div>
                        
                </div>


                <div className="container4"> {/* 하단 아이콘 */}   
                </div>
                    
            </div>

    )
}
