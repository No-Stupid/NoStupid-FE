import { useForm } from "react-hook-form";
import React, { useEffect, useState, useRef } from 'react'
import '../css/Academic.css';


export default function Academic() {
    const {register, watch, formState:{errors}, handleSubmit, getValues} = useForm();

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
                    <div className="title">학력 정보</div>  {/* 타이틀 */}
                </div>

                <div className="line"></div>

                <div className="container3">  {/* 타이틀 아래 */}
                    <div className="starDiv">
                        <p className='starInput'>*은 필수 입니다</p>
                    </div>

                    <div className="schoolInput">  {/* 입력내용 */}
                        <p className='name1'>학교 *</p>
                        {/* 학교 선택 박스 추가 , 초중고는 막을 기능 추가 */}
                        <input 
                            className="school"
                            placeholder='학교명'
                        />
                    </div>

                    <div className="inInput">  {/* 입력내용 */}     
                        <p className='name2'>입학일 *</p>
                        <input 
                            className="in"
                            placeholder='입학일'
                        />
                    </div>
                    
                    <div className="outInput">  {/* 입력내용 */}   
                        <p className='name3'>졸업일[예정일] *</p>
                        <input 
                            className="out"
                            placeholder='졸업일'
                        />   
                    </div>
                    
                    <div className="majorInput">  {/* 입력내용 */}
                        <p className='name4'>전공 </p>
                        <input 
                            className="major"
                            placeholder='전공'
                        />
                    </div>

                    <div className="doubleInput">  {/* 입력내용 */} 
                        <p className='name5'>부/복수/이중 전공 </p>
                        {/* 전공 선택 박스 추가 */}
                        <input 
                            className="double"
                            placeholder='부/복수 전공명'
                        />          
                    </div>
                    
                    <div className="degreeInput">  {/* 입력내용 */}
                        <p className='name6'>학위 </p>
                        <input 
                            className="degree"
                            placeholder='학위'
                        /> 
                    </div>
                            
                    <div className="creditInput">  {/* 입력내용 */}
                        <p className='name7'>학점 </p>
                        <input 
                            className="credit"
                            placeholder='학점'
                        /> 
                    </div>
                            
                    <div className="careerInput">  {/* 입력내용 */}
                        <p className='name8'>수상 경력 </p>
                        <input 
                            className="career"
                            placeholder='수상 경력'
                        /> 
                    </div>

                    <div className="submit">  {/* 버튼 */}   
                        <button
                        //onClick={onClickConfirmButton}
                        //disabled={notAllow}
                        className='submButton'>
                        <p className='subm'>제출</p>
                        </button>
                    </div>
                        
                </div>


                <div className="container4"> {/* 하단 아이콘 */}   
                </div>
                    
            </div>

    )
}
