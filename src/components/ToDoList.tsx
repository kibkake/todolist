import React, {useEffect, useState} from 'react'



function ToDoList(){
    const handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            console.log('do validate');
        }
    }   
    return(
        <div>
            <input type={'text'} onKeyDown={handleKeyDown}>
            </input>
        </div>
        
)

}


export default ToDoList