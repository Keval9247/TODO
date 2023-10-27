import '../App.css';
import React, { useState } from 'react'
import DelList from './DelList';

function Todo() {
    const [input ,setInput] = useState();
    const [todo, setTodo] = useState([]);
    // const [delitem,setdelitem]=useState("");
    const handleclick = () => {
        setTodo((old) => {
            if(old!==""){
            return [...old,input];}
        });
        setInput(null);
    };

    const del=(index)=>{
        let newtodo=[...todo];
        newtodo.splice(index,1);
        setTodo([...newtodo]);

    };
    return (
        <>
            <div className='main'>
                <div className='in-but'>
                    <input type='text' placeholder='Add your todo' className='input' onChange={e => { setInput(e.target.value) }} />
                    <button className='butpl' onClick={handleclick}>+</button>
                </div>
                <div className='name'>
                    TODO LIST
                </div>
                <div className='list'>
                    <ul>
                        {
                            todo.map((e,i) => {
                             return <DelList index={i} set={e} delete={del} />;
                                
                            })
                        }
                    </ul>

                </div>


            </div>
        </>
    )
}
export default Todo;