import React from 'react'


const DelList=(props)=>{
    
    return (
        <>
        <div className='del-main'>
            
           <li><i class="fa-solid fa-circle-xmark" onClick={e=>{props.delete(props.index)}}/>{props.set} </li>
        </div>
        </>
        
        )
}  ;
export default DelList;

