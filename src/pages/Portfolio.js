import { useForm } from "react-hook-form";
import React, { useEffect, useState, useRef } from 'react'
import '../css/Portfolio.css';


export default function Portfolio() {
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
                    <div className="title">포트폴리오 정보</div>  {/* 타이틀 */}
                </div>

                <div className="line"></div>

                <div className="container3">  {/* 타이틀 아래 */}
                    <div className="starDiv">
                        <p className='starInput'>*은 필수 입니다</p>
                    </div>

                    
                    <div className="outInput">  {/* 입력내용 */}   
                        <p className='name3'>사용 플랫폼</p>
                        <input 
                            className="out"
                            placeholder='사용한 플랫폼에 대해 입력하세요'
                        />   
                    </div>
                    
                    <div className="majorInput">  {/* 입력내용 */}
                        <p className='name4'>링크 </p>
                        <input 
                            className="major"
                            placeholder='링크를 입력하세요'
                        />
                    </div>
                
                            
                    <div className="submit1">  {/* 버튼 */}   
                        <button
                        //onClick={onClickConfirmButton}
                        //disabled={notAllow}
                        className='submButton1'>
                        <p className='subm1'>+ 포트폴리오 추가</p>
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
