import React from 'react'

const TodoForm = (props) => {

    return (
        <div className='toDoForm'>
            <input type='text' 
                    onChange={props.inputChange}
                    placeholder='Your task' 
                    value={props.state.inputValue}/>
            <button onClick={props.pushTask}>add</button>
            <button onClick={props.cleanReadyTask}>clean</button>
        </div>
    )
}

export default TodoForm