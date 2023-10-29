import { useForm } from "react-hook-form";
import React, { useEffect, useState, useRef } from 'react';
import '../css/Todo.css';
import { FaTrash } from "react-icons/fa"

export default function Todo() {
    const {register, watch, formState:{errors}, handleSubmit, getValues} = useForm();
    
    const [todoList, setTodoList] = useState([])
    const [sequance, setSequance] = useState(null)
    const refTodoItem = useRef()

    useEffect(()=>{
        let sequance = window.localStorage.getItem("sequance")
        if(sequance === null ){
            window.localStorage.setItem("sequance","0")
            sequance = 0;
        }
        const handleSetInit = () => {
            window.localStorage.setItem("todolist","[]")
            return "[]"

        }
        let todo = JSON.parse(window.localStorage.getItem("todolist")??handleSetInit());

        setTodoList(todo)
        setSequance(Number(sequance))
    },[])

    const handleTodoAdd = (item) => {
        if(sequance === null){
            return
        }
        let todo = [...todoList]

        todo.push({tf:false,id:sequance+1,text:item})

        window.localStorage.setItem("todolist", JSON.stringify(todo));
        window.localStorage.setItem("sequance",String(sequance+1));

        setTodoList(todo)
        setSequance(sequance+1)
        refTodoItem.current.value=''
    }

    const handleTodoCheck = (tf, idx) => {
        let todo = [...todoList]
        todo[idx].tf = !tf

        window.localStorage.setItem("todolist", JSON.stringify(todo));
        setTodoList(todo)
    }

    const handleTodoDelete = (id) => {
        let todo = [...todoList]
        todo = todo.filter((val) => val.id!== id );

        window.localStorage.setItem("todolist",JSON.stringify(todo));
        setTodoList(todo)
    }

    return (
        //<form onSubmit={handleSubmit(onSubmit)}>
            <div className="page">
                <div className="container1">
                        <div className="title">To Do List</div>  
                </div>

                <div className="container2">  
                    <div className="todoAdd"> 
                        <input 
                            type="text"
                            placeholder='할 일을 입력하세요'
                            ref={refTodoItem}
                        />
                        <button
                            //disabled={notAllow}
                            className='addButton'>
                                <div className="plus" onClick={() => handleTodoAdd(refTodoItem.current.value)}>
                                    +
                                </div>
                        </button>
                    </div>

                    <div className="list">
                        {todoList.map((val,idx)=>
                            <div className="todoItem" key ={idx}>
                                <div className="checkBox" onClick={() => handleTodoCheck(val.tf,idx)}>
                                    <div className="checkIcon">
                                        {val.tf?'✔':''}
                                    </div>
                                    <span>{val.text}</span>
                                </div>
                                <div className="deleteBox" onClick={()=>handleTodoDelete(val.id)}>
                                    <FaTrash/>
                                </div>
                            </div>
                        )}
                        

                    </div>



                </div>
                    
                    
            </div>

    )
}
