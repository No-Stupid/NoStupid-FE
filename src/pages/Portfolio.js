import { useForm } from "react-hook-form";
import React, { useEffect, useState, useRef } from 'react'
import '../css/Portfolio.css';
import { FaArrowLeft } from "react-icons/fa"



export default function Portfolio() {
    const {register, watch, formState:{errors}, handleSubmit, getValues} = useForm();

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
                    <FaArrowLeft className="backPo"/></div> 
                    <div className="titleCa">포트폴리오 정보</div>  {/* 타이틀 */}
                </div>

                <div className="line"></div>

                <div className="containerCa3">  {/* 타이틀 아래 */}
                    <div className="starDiv">
                        <p className='starInput'>*은 필수 입니다</p>
                    </div>

                    
                    <div className="po1Input">  {/* 입력내용 */}   
                        <p className='po1Name'>사용 플랫폼</p>
                        <input 
                            placeholder='사용한 플랫폼에 대해 입력하세요'
                        />   
                    </div>
                    
                    <div className="po2Input">  {/* 입력내용 */}
                        <p className='po2Name'>링크 </p>
                        <input 
                            placeholder='링크를 입력하세요'
                        />
                    </div>
                
                        

                    <div className="submitPo">   
                        <button
                        //onClick={onClickConfirmButton}
                        //disabled={notAllow}
                        >
                        <p className='poSubm'>수정</p>
                        </button>
                    </div>

                    <div className="deletePo">  {/* 버튼 */}   
                        <button
                        //onClick={onClickConfirmButton}
                        //disabled={notAllow}
                        >
                        <p className='poSubm'>삭제</p>
                        </button>
                    </div>
                        
                </div>


                <div className="container4"> {/* 하단 아이콘 */}   
                </div>
                    
            </div>

    )
}
