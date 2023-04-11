import React, { useState } from 'react'
import { createRequest } from '../api/todoRequest';
import { Btn } from '../styles'

export const CreateTodo = ({data, setData}) => {
	const [todo, setTodo] = useState('');

	const handleCreate = () => {
		try {
			createRequest(todo).then( res => {
				if(res[0] === 201 ) {
					setTodo('');
					setData([...data,res[1]]);
				} 
			})
			
		} catch (err) {
			console.log("handleCreate",err);
		}
	}

	return (
    <div className="create_todo">
      <input 
	  		type="text"
				data-testid="new-todo-input" 
        onChange={(e) => setTodo(e.target.value)} 
        value={todo}
      />
      <Btn 
				data-testid="new-todo-add-button"
				onClick={handleCreate}
				width={"50px"}
			>
				추가
	  	</Btn>
    </div>
  )
}

