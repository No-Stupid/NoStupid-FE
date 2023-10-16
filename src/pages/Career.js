import { useForm } from "react-hook-form";
import React, { useEffect, useState, useRef } from 'react'
import '../css/Career.css';


export default function Career() {
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
                    <div className="title">경력 정보</div>  {/* 타이틀 */}
                </div>

                <div className="line"></div>

                <div className="container3">  {/* 타이틀 아래 */}
                    <div className="starDiv">
                        <p className='starInput'>*은 필수 입니다</p>
                    </div>



                    <div className="inInput">  {/* 입력내용 */}     
                        <p className='name2'>회사 *</p>
                        <input 
                            className="in"
                            placeholder='회사명을 입력하세요'
                        />
                    </div>
                    
                    <div className="outInput">  {/* 입력내용 */}   
                        <p className='name3'>직무 능력 *</p>
                        <input 
                            className="out"
                            placeholder='직무 능력에 대해 입력하세요'
                        />   
                    </div>
                    
                    <div className="majorInput">  {/* 입력내용 */}
                        <p className='name4'>담당 업무 * </p>
                        <input 
                            className="major"
                            placeholder='담당했던 업무에 대해 입력하세요'
                        />
                    </div>
                    
                    <div className="degreeInput">  {/* 입력내용 */}
                        <p className='name6'>입사일 * </p>
                        <input 
                            className="degree"
                            placeholder='yyyy.mm.dd'
                        /> 
                    </div>
                            
                    <div className="creditInput">  {/* 입력내용 */}
                        <p className='name7'>퇴사일 * </p>
                        <input 
                            className="credit"
                            placeholder='yyyy.mm.dd'
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
